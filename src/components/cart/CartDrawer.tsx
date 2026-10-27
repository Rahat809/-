import React from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { BrandLogo } from "../common/BrandLogo";
import { useCart } from "../../context/CartContext";
import { formatBDT } from "../../utils/currency";
import { deliveryConfig } from "../../config/deliveryConfig";
import { PageView } from "../../types";

interface CartDrawerProps {
  navigate: (view: PageView) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ navigate }) => {
  const { items, removeItem, updateQuantity, subtotal, isCartOpen, setIsCartOpen } =
    useCart();

  if (!isCartOpen) return null;

  const threshold = deliveryConfig.freeDeliveryThreshold;
  const remainingForFree = Math.max(0, threshold - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / threshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-3 sm:p-4 border-b border-gray-100 flex items-center justify-between bg-[#FFF9ED]">
            <div className="flex items-center gap-2.5">
              <BrandLogo size="sm" />
              <div className="h-5 w-px bg-neutral-200"></div>
              <h2 className="text-xs sm:text-sm font-bold text-[#164B35] flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4 text-[#F28C28]" />
                <span>শপিং ব্যাগ ({items.length})</span>
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg cursor-pointer hover:bg-neutral-100 transition-colors"
              aria-label="বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery Meter */}
          {items.length > 0 && (
            <div className="p-3.5 bg-[#E6F0D5]/60 border-b border-[#164B35]/10 text-xs">
              <div className="flex items-center justify-between font-medium text-[#164B35] mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#164B35]" />
                  {remainingForFree > 0
                    ? `আর ${formatBDT(remainingForFree)} কেনাকাটায় ফ্রি ডেলিভারি!`
                    : "অভিনন্দন! আপনি পাচ্ছেন ফ্রি ডেলিভারি!"}
                </span>
                <span className="font-semibold">{progressPercent}%</span>
              </div>
              <div className="w-full h-1.5 bg-white rounded-full overflow-hidden border border-[#164B35]/15">
                <div
                  className="h-full bg-[#164B35] transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-gray-100">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-500">
                <div className="w-16 h-16 rounded-full bg-[#FFF9ED] border border-[#D4A63C]/30 flex items-center justify-center text-[#D4A63C] mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-semibold text-[#252A25] mb-1">
                  আপনার ব্যাগ বর্তমানে খালি
                </h3>
                <p className="text-xs text-gray-500 max-w-xs mb-6">
                  বাঙালী ফুড-এর শতভাগ খাঁটি ও প্রাকৃতিক মধু থেকে আপনার পছন্দের পণ্য বেছে নিন।
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate({ type: "products" });
                  }}
                  className="px-5 py-2.5 bg-[#164B35] text-white text-xs font-semibold rounded-full hover:bg-[#113928] cursor-pointer"
                >
                  পণ্য তালিকা দেখুন
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="py-4 flex gap-3 sm:gap-4 items-center">
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-16 h-16 rounded-xl object-cover bg-stone-100 shrink-0 border border-gray-100"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-[#252A25] truncate">
                      {item.productName}
                    </h4>
                    <p className="text-xs text-[#164B35] font-medium mt-0.5">
                      প্যাক: {item.packageSizeLabel}
                    </p>
                    <p className="text-xs font-semibold text-[#252A25] mt-1">
                      {formatBDT(item.unitPrice)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="inline-flex items-center border border-gray-200 rounded-lg bg-gray-50 p-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-white text-gray-600 rounded cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold font-mono text-[#252A25]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-white text-gray-600 rounded cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 p-1 text-xs cursor-pointer ml-auto"
                        title="মুছে ফেলুন"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-gray-100 bg-[#FFF9ED]/60 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">মোট মূল্য (Subtotal):</span>
                <span className="text-base font-bold text-[#164B35]">
                  {formatBDT(subtotal)}
                </span>
              </div>

              <div className="text-[11px] text-gray-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#164B35] shrink-0" />
                <span>ডেলিভারি চার্জ চেকআউটে ঠিকানা অনুযায়ী যুক্ত হবে।</span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate({ type: "cart" });
                  }}
                  className="w-full py-2.5 px-3 border border-[#164B35] text-[#164B35] hover:bg-[#E6F0D5]/50 text-xs font-semibold rounded-xl cursor-pointer"
                >
                  ব্যাগ দেখুন
                </button>

                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate({ type: "checkout" });
                  }}
                  className="w-full py-2.5 px-3 bg-[#F28C28] hover:bg-[#d87b20] text-white text-xs font-bold rounded-xl shadow-xs flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>চেকআউট</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
