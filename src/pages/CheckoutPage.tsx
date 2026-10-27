import React, { useState } from "react";
import {
  MessageCircle,
  ShieldCheck,
  Truck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShoppingBag,
  Printer,
  Copy,
  Check,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatBDT } from "../utils/currency";
import { deliveryConfig } from "../config/deliveryConfig";
import { siteConfig } from "../config/siteConfig";
import {
  validateBangladeshiPhone,
  generateWhatsAppOrderMessage,
  getWhatsAppClickUrl,
} from "../utils/whatsapp";
import { CheckoutFormData, PageView } from "../types";
import { BrandLogo } from "../components/common/BrandLogo";

interface CheckoutPageProps {
  navigate: (view: PageView) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ navigate }) => {
  const { items, subtotal, clearCart } = useCart();

  const [formData, setFormData] = useState<CheckoutFormData>({
    customerName: "",
    mobileNumber: "",
    district: "dhaka",
    thana: "",
    deliveryAddress: "",
    deliveryNotes: "",
    email: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [orderConfirmed, setOrderConfirmed] = useState<{
    orderId: string;
    date: string;
    total: number;
  } | null>(null);

  // Delivery charge calculation
  const isFreeDelivery = subtotal >= deliveryConfig.freeDeliveryThreshold;
  const deliveryCharge = isFreeDelivery
    ? 0
    : formData.district === "dhaka"
    ? deliveryConfig.insideDhakaCharge
    : deliveryConfig.outsideDhakaCharge;

  const grandTotal = subtotal + deliveryCharge;

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = "আপনার নাম লিখুন";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "মোবাইল নম্বর প্রদান করুন";
    } else if (!validateBangladeshiPhone(formData.mobileNumber)) {
      newErrors.mobileNumber = "সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 01949075850)";
    }

    if (!formData.deliveryAddress.trim()) {
      newErrors.deliveryAddress = "সম্পূর্ণ ডেলিভারি ঠিকানা লিখুন";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // WhatsApp Order Submission
  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = generateWhatsAppOrderMessage(
      formData,
      items,
      subtotal,
      deliveryCharge,
      grandTotal
    );

    const waUrl = getWhatsAppClickUrl(message);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  // Direct Website Order Placement
  const handleWebsiteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const orderId = `BF-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date().toLocaleDateString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setOrderConfirmed({
      orderId,
      date: now,
      total: grandTotal,
    });

    clearCart();
  };

  if (items.length === 0 && !orderConfirmed) {
    return (
      <div className="py-16 sm:py-24 bg-[#FFF9ED] min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-white border border-[#164B35]/20 flex items-center justify-center text-[#164B35] mx-auto mb-4">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-[#164B35] mb-2">
            চেকআউট করার জন্য কোনো পণ্য ব্যাগে নেই
          </h2>
          <p className="text-xs text-gray-500 mb-6">
            অনুগ্রহ করে পণ্য তালিকা থেকে মধু কার্টে যোগ করে পুনরায় চেকআউট করুন।
          </p>
          <button
            onClick={() => navigate({ type: "products" })}
            className="px-6 py-2.5 bg-[#164B35] text-white text-xs font-bold rounded-xl hover:bg-[#113928] cursor-pointer"
          >
            পণ্য তালিকা দেখুন
          </button>
        </div>
      </div>
    );
  }

  // Order Confirmed Success State
  if (orderConfirmed) {
    return (
      <div className="py-14 sm:py-20 bg-[#FFF9ED] min-h-[75vh]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#164B35]/20 shadow-xl text-center">
            {/* Official Brand Logo */}
            <div className="flex justify-center mb-6">
              <BrandLogo size="lg" />
            </div>

            <div className="w-14 h-14 rounded-full bg-[#E6F0D5] text-[#164B35] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#164B35]" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#164B35] mb-2">
              ধন্যবাদ! আপনার অর্ডারটি গ্রহণ করা হয়েছে
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mb-6">
              বাঙালী ফুড থেকে শীঘ্রই আপনার প্রদত্ত নম্বরে কল বা WhatsApp-এর মাধ্যমে অর্ডারটি কনফার্ম করা হবে।
            </p>

            <div className="bg-[#FFF9ED] rounded-2xl p-5 border border-[#D4A63C]/30 text-left space-y-2 mb-6 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">অর্ডার আইডি:</span>
                <span className="font-bold font-mono text-[#164B35]">{orderConfirmed.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">গ্রাহকের নাম:</span>
                <span className="font-semibold text-[#252A25]">{formData.customerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">মোবাইল:</span>
                <span className="font-semibold font-mono text-[#252A25]">{formData.mobileNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">ডেলিভারি ঠিকানা:</span>
                <span className="font-semibold text-[#252A25] text-right max-w-xs">{formData.deliveryAddress}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200">
                <span className="font-bold text-[#164B35]">পরিশোধযোগ্য মূল্য (COD):</span>
                <span className="font-bold text-base text-[#164B35]">
                  {formatBDT(orderConfirmed.total)}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.print()}
                className="py-2.5 px-5 bg-white border border-gray-300 text-gray-700 text-xs font-semibold rounded-xl hover:bg-gray-50 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>রসিদ প্রিন্ট করুন</span>
              </button>

              <button
                onClick={() => navigate({ type: "home" })}
                className="py-2.5 px-6 bg-[#164B35] text-white text-xs font-bold rounded-xl hover:bg-[#113928] cursor-pointer"
              >
                হোমপেজে ফিরে যান
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 bg-[#FFF9ED] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <button
            onClick={() => navigate({ type: "home" })}
            className="hover:text-[#164B35] cursor-pointer"
          >
            হোম
          </button>
          <span>/</span>
          <button
            onClick={() => navigate({ type: "cart" })}
            className="hover:text-[#164B35] cursor-pointer"
          >
            শপিং ব্যাগ
          </button>
          <span>/</span>
          <span className="text-[#164B35] font-semibold">চেকআউট ও অর্ডার</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#164B35] mb-8">
          অর্ডার ও ডেলিভারি তথ্য
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Customer Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#164B35]/15 shadow-sm">
            <h2 className="text-base sm:text-lg font-bold text-[#164B35] mb-5 pb-3 border-b border-gray-100">
              আপনার ডেলিভারি ঠিকানা দিন
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#252A25] mb-1.5">
                  আপনার পূর্ণ নাম <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.customerName}
                  onChange={(e) =>
                    setFormData({ ...formData, customerName: e.target.value })
                  }
                  placeholder="যেমন: মোঃ রাহাতুল ইসলাম"
                  className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-white border rounded-xl text-[#252A25] focus:outline-hidden ${
                    errors.customerName ? "border-red-400 bg-red-50/20" : "border-gray-200 focus:border-[#164B35]"
                  }`}
                />
                {errors.customerName && (
                  <p className="text-[11px] text-red-500 mt-1">{errors.customerName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#252A25] mb-1.5">
                  মোবাইল নম্বর <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, mobileNumber: e.target.value })
                  }
                  placeholder="যেমন: 01949075850 (১১ ডিজিট)"
                  className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-white border rounded-xl text-[#252A25] focus:outline-hidden ${
                    errors.mobileNumber ? "border-red-400 bg-red-50/20" : "border-gray-200 focus:border-[#164B35]"
                  }`}
                />
                {errors.mobileNumber && (
                  <p className="text-[11px] text-red-500 mt-1">{errors.mobileNumber}</p>
                )}
              </div>

              {/* District Radio Selection */}
              <div>
                <label className="block text-xs font-bold text-[#252A25] mb-1.5">
                  ডেলিভারি এলাকা / জেলা <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      formData.district === "dhaka"
                        ? "border-[#164B35] bg-[#E6F0D5]/60 text-[#164B35] font-bold"
                        : "border-gray-200 bg-white text-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="district"
                        value="dhaka"
                        checked={formData.district === "dhaka"}
                        onChange={() => setFormData({ ...formData, district: "dhaka" })}
                        className="text-[#164B35]"
                      />
                      <span className="text-xs sm:text-sm">ঢাকা সিটির ভিতরে</span>
                    </div>
                    <span className="text-xs font-semibold">
                      {isFreeDelivery ? "ফ্রি" : formatBDT(deliveryConfig.insideDhakaCharge)}
                    </span>
                  </label>

                  <label
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      formData.district === "outside_dhaka"
                        ? "border-[#164B35] bg-[#E6F0D5]/60 text-[#164B35] font-bold"
                        : "border-gray-200 bg-white text-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="district"
                        value="outside_dhaka"
                        checked={formData.district === "outside_dhaka"}
                        onChange={() => setFormData({ ...formData, district: "outside_dhaka" })}
                        className="text-[#164B35]"
                      />
                      <span className="text-xs sm:text-sm">ঢাকার বাইরে (সারাদেশ)</span>
                    </div>
                    <span className="text-xs font-semibold">
                      {isFreeDelivery ? "ফ্রি" : formatBDT(deliveryConfig.outsideDhakaCharge)}
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#252A25] mb-1.5">
                  থানা বা উপজেলা
                </label>
                <input
                  type="text"
                  value={formData.thana}
                  onChange={(e) => setFormData({ ...formData, thana: e.target.value })}
                  placeholder="যেমন: যাত্রাবাড়ী / মিরপুর / সদর"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-white border border-gray-200 rounded-xl text-[#252A25] focus:outline-hidden focus:border-[#164B35]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#252A25] mb-1.5">
                  সম্পূর্ণ ডেলিভারি ঠিকানা <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.deliveryAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, deliveryAddress: e.target.value })
                  }
                  placeholder="বাসা নং, রোড নং, এলাকা ও ল্যান্ডমার্ক..."
                  className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-white border rounded-xl text-[#252A25] focus:outline-hidden resize-none ${
                    errors.deliveryAddress ? "border-red-400 bg-red-50/20" : "border-gray-200 focus:border-[#164B35]"
                  }`}
                />
                {errors.deliveryAddress && (
                  <p className="text-[11px] text-red-500 mt-1">{errors.deliveryAddress}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#252A25] mb-1.5">
                  বিশেষ নির্দেশনা (ঐচ্ছিক)
                </label>
                <input
                  type="text"
                  value={formData.deliveryNotes}
                  onChange={(e) =>
                    setFormData({ ...formData, deliveryNotes: e.target.value })
                  }
                  placeholder="ডেলিভারি সংক্রান্ত কোনো বিশেষ বার্তা থাকলে লিখুন"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-white border border-gray-200 rounded-xl text-[#252A25] focus:outline-hidden focus:border-[#164B35]"
                />
              </div>
            </form>
          </div>

          {/* Right: Order Summary & Placement Buttons */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#164B35]/15 shadow-sm space-y-5">
            <h2 className="text-base font-bold text-[#164B35] pb-3 border-b border-gray-100">
              অর্ডার সারসংক্ষেপ ({items.length} টি পণ্য)
            </h2>

            {/* Items Mini List */}
            <div className="divide-y divide-gray-100 max-h-52 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.id} className="py-2.5 flex items-center justify-between text-xs">
                  <div className="flex-1 min-w-0 pr-2">
                    <p className="font-semibold text-[#252A25] truncate">{item.productName}</p>
                    <p className="text-gray-500">
                      {item.packageSizeLabel} × {item.quantity} টি
                    </p>
                  </div>
                  <span className="font-bold text-[#164B35]">
                    {formatBDT(item.unitPrice * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations Breakdown */}
            <div className="pt-3 border-t border-gray-100 space-y-2 text-xs sm:text-sm text-gray-600">
              <div className="flex justify-between">
                <span>পণ্যের মোট মূল্য:</span>
                <span className="font-semibold text-[#252A25]">{formatBDT(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>ডেলিভারি চার্জ ({formData.district === "dhaka" ? "ঢাকা সিটি" : "ঢাকার বাইরে"}):</span>
                <span className="font-semibold text-[#252A25]">
                  {isFreeDelivery ? "০ (ফ্রি)" : formatBDT(deliveryCharge)}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm font-bold text-[#252A25]">সর্বমোট মূল্য:</span>
              <span className="text-2xl font-bold text-[#164B35]">
                {formatBDT(grandTotal)}
              </span>
            </div>

            {/* Order Action 1: WhatsApp Order Button */}
            <div className="pt-2 space-y-2.5">
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>WhatsApp-এ অর্ডার পাঠান (01949075850)</span>
              </button>

              <div className="text-[11px] text-gray-500 text-center">
                বাটনে চাপ দিলে WhatsApp অ্যাপে আপনার অর্ডারের পূর্ণ বিবরণ তৈরি হবে।
              </div>

              {/* Order Action 2: Direct Website Order Submission */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-3 text-[11px] text-gray-400">অথবা</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <button
                type="button"
                onClick={handleWebsiteOrder}
                className="w-full py-3 px-4 bg-[#164B35] hover:bg-[#113928] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-[#D4A63C]" />
                <span>ওয়েবসাইটে সরাসরি অর্ডার প্লেস করুন (COD)</span>
              </button>
            </div>

            {/* Payment Method Assurance */}
            <div className="p-3 bg-[#FFF9ED] rounded-xl border border-[#D4A63C]/30 text-[11px] text-gray-600 space-y-1">
              <p className="font-bold text-[#164B35]">✓ পেমেন্ট পদ্ধতি:</p>
              <p>ক্যাশ অন ডেলিভারি (পণ্য হাতে পেয়ে দেখে মূল্য পরিশোধ)।</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
