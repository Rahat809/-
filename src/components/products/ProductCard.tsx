import React, { useState } from "react";
import { ShoppingBag, Eye, MessageCircle, Check, Sparkles } from "lucide-react";
import { Product, PackageSize, PageView } from "../../types";
import { useCart } from "../../context/CartContext";
import { formatBDT } from "../../utils/currency";
import { getWhatsAppClickUrl, generateSingleProductInquiryMessage } from "../../utils/whatsapp";

interface ProductCardProps {
  product: Product;
  navigate: (view: PageView) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, navigate }) => {
  const { addItem, setIsCartOpen } = useCart();
  const [selectedSize, setSelectedSize] = useState<PackageSize>(
    product.packageSizes[0]
  );
  const [addedAnim, setAddedAnim] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, selectedSize, 1);
    setAddedAnim(true);
    setTimeout(() => setAddedAnim(false), 1200);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, selectedSize, 1);
    setIsCartOpen(true);
  };

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = generateSingleProductInquiryMessage(
      product.name,
      selectedSize.sizeLabel,
      selectedSize.price
    );
    window.open(getWhatsAppClickUrl(msg), "_blank", "noopener,noreferrer");
  };

  const hasDiscount =
    selectedSize.previousPrice && selectedSize.previousPrice > selectedSize.price;
  const discountAmount = hasDiscount
    ? selectedSize.previousPrice! - selectedSize.price
    : 0;

  return (
    <div
      onClick={() => navigate({ type: "product_detail", slug: product.slug })}
      className="group bg-white rounded-2xl border border-[#164B35]/15 hover:border-[#164B35]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer relative"
    >
      {/* Product Image & Badges */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#FFF9ED]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges Container */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
          {product.isBestSeller && (
            <span className="font-bengali text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#164B35] text-white shadow-xs">
              সেরা বিক্রিত
            </span>
          )}
          {hasDiscount && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F28C28] text-white shadow-xs">
              {formatBDT(discountAmount)} ছাড়
            </span>
          )}
        </div>

        {/* Quick View Floating Overlay on Desktop */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none sm:pointer-events-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate({ type: "product_detail", slug: product.slug });
            }}
            className="p-2.5 bg-white text-[#164B35] rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer"
            title="বিস্তারিত দেখুন"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={handleWhatsAppOrder}
            className="p-2.5 bg-[#25D366] text-white rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer"
            title="WhatsApp-এ অর্ডার"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="font-bengali text-[11px] font-medium text-[#164B35] tracking-wide block mb-1">
            {product.categoryName}
          </span>

          <h3 className="font-bengali bengali-card-title text-base sm:text-lg font-semibold text-[#252A25] group-hover:text-[#164B35] transition-colors leading-[1.35] line-clamp-1 mb-1.5">
            {product.name}
          </h3>

          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-3">
            {product.shortDescription}
          </p>

          {/* Package Size Chips */}
          <div className="mb-3">
            <span className="text-[11px] text-gray-400 block mb-1">প্যাকেজ নির্বাচন:</span>
            <div className="flex flex-wrap gap-1.5">
              {product.packageSizes.map((size) => (
                <button
                  key={size.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(size);
                  }}
                  className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                    selectedSize.id === size.id
                      ? "bg-[#164B35] text-white shadow-2xs font-semibold"
                      : "bg-[#FFF9ED] border border-[#164B35]/20 text-[#252A25] hover:border-[#164B35]"
                  }`}
                >
                  {size.sizeLabel}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing and Action Buttons */}
        <div className="pt-3 border-t border-gray-100">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg sm:text-xl font-bold text-[#164B35]">
              {formatBDT(selectedSize.price)}
            </span>
            {hasDiscount && (
              <span className="text-xs text-gray-400 line-through">
                {formatBDT(selectedSize.previousPrice!)}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleAddToCart}
              className={`py-2 px-3 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer ${
                addedAnim
                  ? "bg-[#164B35] text-white"
                  : "bg-[#E6F0D5] text-[#164B35] hover:bg-[#d8e6c2] border border-[#164B35]/20"
              }`}
            >
              {addedAnim ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>যোগ হয়েছে</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>কার্ট-এ যোগ</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleBuyNow}
              className="py-2 px-3 bg-[#F28C28] hover:bg-[#db7a1d] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center cursor-pointer"
            >
              এখনই কিনুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
