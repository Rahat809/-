import React from "react";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatBDT } from "../utils/currency";
import { deliveryConfig } from "../config/deliveryConfig";
import { BrandLogo } from "../components/common/BrandLogo";
import { PageView } from "../types";

interface CartPageProps {
  navigate: (view: PageView) => void;
}

export const CartPage: React.FC<CartPageProps> = ({ navigate }) => {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();

  const threshold = deliveryConfig.freeDeliveryThreshold;
  const remainingForFree = Math.max(0, threshold - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / threshold) * 100));

  if (items.length === 0) {
    return (
      <div className="py-16 sm:py-24 bg-[#FFF9ED] min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <BrandLogo size="lg" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#164B35] mb-2">
            আপনার ব্যাগ বর্তমানে খালি
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-8 leading-relaxed">
            বাঙালী ফুড-এর শতভাগ খাঁটি ও প্রাকৃতিক মধুর বিভিন্ন প্যাকেজ থেকে আপনার পরিবারের জন্য সেরা মধু নির্বাচন করুন।
          </p>
          <button
            onClick={() => navigate({ type: "products" })}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#164B35] hover:bg-[#113928] text-white text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>পণ্য তালিকা দেখুন</span>
            <ArrowRight className="w-4 h-4 text-[#D4A63C]" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 bg-[#FFF9ED] min-h-[75vh]">
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
          <span className="text-[#164B35] font-semibold">শপিং ব্যাগ</span>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#164B35]">
            শপিং ব্যাগ ({items.length} টি আইটেম)
          </h1>
          <button
            onClick={clearCart}
            className="text-xs text-gray-500 hover:text-red-500 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>ব্যাগ খালি করুন</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Items List */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-5 sm:p-7 border border-[#164B35]/15 shadow-sm divide-y divide-gray-100">
            {/* Free Delivery Bar */}
            <div className="pb-4 mb-2">
              <div className="flex items-center justify-between text-xs font-semibold text-[#164B35] mb-2">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#F28C28]" />
                  {remainingForFree > 0
                    ? `আর মাত্র ${formatBDT(remainingForFree)} কেনাকাটায় সম্পূর্ণ ফ্রি ডেলিভারি!`
                    : "অভিনন্দন! আপনি পাচ্ছেন ফ্রি ডেলিভারি!"}
                </span>
                <span>{progressPercent}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#164B35] transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {items.map((item) => (
              <div key={item.id} className="py-4 sm:py-5 flex items-center gap-4">
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover bg-stone-100 shrink-0 border border-gray-100"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-[#252A25] truncate">
                    {item.productName}
                  </h3>
                  <p className="text-xs text-[#164B35] font-semibold mt-0.5">
                    প্যাকেজ: {item.packageSizeLabel}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    একক মূল্য: {formatBDT(item.unitPrice)}
                  </p>
                </div>

                {/* Quantity and Line Total */}
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="inline-flex items-center border border-gray-200 rounded-xl bg-gray-50 p-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-white text-gray-700 rounded transition-colors cursor-pointer"
                      aria-label="কমান"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs sm:text-sm font-bold font-mono text-[#252A25]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-white text-gray-700 rounded transition-colors cursor-pointer"
                      aria-label="বাড়ান"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="text-sm sm:text-base font-bold text-[#164B35] w-20 text-right">
                    {formatBDT(item.unitPrice * item.quantity)}
                  </span>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1.5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                    title="আইটেম মুছুন"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Box */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-[#164B35]/15 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#164B35] pb-3 border-b border-gray-100">
              অর্ডারের সংক্ষিপ্ত বিবরণ
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>পণ্যের মোট মূল্য:</span>
                <span className="font-bold text-[#252A25]">{formatBDT(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>ডেলিভারি চার্জ:</span>
                <span className="text-xs text-[#164B35] font-semibold">
                  চেকআউটে জেলা অনুযায়ী যুক্ত হবে
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm font-bold text-[#252A25]">মোট (Subtotal):</span>
              <span className="text-xl font-bold text-[#164B35]">
                {formatBDT(subtotal)}
              </span>
            </div>

            <button
              onClick={() => navigate({ type: "checkout" })}
              className="w-full py-3.5 px-4 bg-[#F28C28] hover:bg-[#db7a1d] text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>চেকআউট পেজে যান</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate({ type: "products" })}
              className="w-full py-2.5 px-4 border border-[#164B35]/30 text-[#164B35] hover:bg-[#E6F0D5]/50 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>আরও মধু যোগ করুন</span>
            </button>

            <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-500 space-y-1">
              <p>✓ ক্যাশ অন ডেলিভারি সুবিধা রয়েছে।</p>
              <p>✓ ডেলিভারির সময় পার্সেল দেখে নেওয়ার সুযোগ।</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
