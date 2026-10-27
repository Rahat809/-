import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  MessageCircle,
  Truck,
  ShieldCheck,
  Check,
  Plus,
  Minus,
  ArrowLeft,
  Share2,
  Package,
  Layers,
  Info,
} from "lucide-react";
import { PRODUCTS } from "../data/products";
import { Product, PackageSize, PageView } from "../types";
import { useCart } from "../context/CartContext";
import { formatBDT } from "../utils/currency";
import {
  getWhatsAppClickUrl,
  generateSingleProductInquiryMessage,
} from "../utils/whatsapp";
import { deliveryConfig } from "../config/deliveryConfig";
import { ProductCard } from "../components/products/ProductCard";

interface ProductDetailsPageProps {
  slug: string;
  navigate: (view: PageView) => void;
}

export const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({
  slug,
  navigate,
}) => {
  const { addItem, setIsCartOpen } = useCart();
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  const [selectedSize, setSelectedSize] = useState<PackageSize>(
    product.packageSizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"desc" | "storage" | "delivery">("desc");
  const [addedNotice, setAddedNotice] = useState(false);

  // Update selected size when product changes
  useEffect(() => {
    setSelectedImage(product.images[0]);
    setSelectedSize(product.packageSizes[0]);
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedSize, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product, selectedSize, quantity);
    navigate({ type: "checkout" });
  };

  const handleWhatsAppOrder = () => {
    const msg = generateSingleProductInquiryMessage(
      product.name,
      `${selectedSize.sizeLabel} × ${quantity} টি`,
      selectedSize.price * quantity
    );
    window.open(getWhatsAppClickUrl(msg), "_blank", "noopener,noreferrer");
  };

  const hasDiscount =
    selectedSize.previousPrice && selectedSize.previousPrice > selectedSize.price;

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  );

  return (
    <div className="py-8 sm:py-12 bg-[#FFF9ED] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <button
            onClick={() => navigate({ type: "home" })}
            className="hover:text-[#164B35] cursor-pointer"
          >
            হোম
          </button>
          <span>/</span>
          <button
            onClick={() => navigate({ type: "products" })}
            className="hover:text-[#164B35] cursor-pointer"
          >
            পণ্য তালিকা
          </button>
          <span>/</span>
          <button
            onClick={() =>
              navigate({ type: "products", categorySlug: product.categorySlug })
            }
            className="hover:text-[#164B35] cursor-pointer"
          >
            {product.categoryName}
          </button>
          <span>/</span>
          <span className="text-[#164B35] font-semibold truncate max-w-xs">
            {product.name}
          </span>
        </div>

        {/* Product Details Main Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#164B35]/15 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Product Images Gallery */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FFF9ED] border border-gray-100 shadow-2xs">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isBestSeller && (
                  <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-[#164B35] text-white shadow-xs">
                    সেরা বিক্রিত পণ্য
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedImage === img
                          ? "border-[#164B35] scale-95 shadow-xs"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt="thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Actions & Information */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#164B35] tracking-wide uppercase">
                  {product.categoryName} · {product.englishName}
                </span>

                <h1 className="text-2xl sm:text-3xl font-bold text-[#252A25] mt-1.5 mb-3 leading-tight">
                  {product.name}
                </h1>

                {/* Pricing Block */}
                <div className="flex items-baseline gap-3 p-4 rounded-2xl bg-[#FFF9ED] border border-[#D4A63C]/30 mb-5">
                  <span className="text-3xl font-bold text-[#164B35]">
                    {formatBDT(selectedSize.price * quantity)}
                  </span>
                  {hasDiscount && (
                    <span className="text-sm text-gray-400 line-through">
                      {formatBDT(selectedSize.previousPrice! * quantity)}
                    </span>
                  )}
                  <span className="text-xs text-gray-500 ml-auto">
                    (প্রতি প্যাক {formatBDT(selectedSize.price)})
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  {product.shortDescription}
                </p>

                {/* Package Size Selector */}
                <div className="mb-6">
                  <label className="block text-xs font-bold text-[#252A25] mb-2 uppercase tracking-wide">
                    প্যাকেজ ওজন বেছে নিন:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {product.packageSizes.map((size) => {
                      const isSelected = selectedSize.id === size.id;
                      return (
                        <button
                          key={size.id}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? "border-[#164B35] bg-[#E6F0D5]/70 shadow-xs ring-1 ring-[#164B35]"
                              : "border-gray-200 bg-white hover:border-[#164B35]/40"
                          }`}
                        >
                          <span className="text-xs font-bold text-[#252A25] block">
                            {size.sizeLabel}
                          </span>
                          <span className="text-xs font-semibold text-[#164B35] mt-0.5 block">
                            {formatBDT(size.price)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4 mb-6">
                  <label className="text-xs font-bold text-[#252A25] uppercase tracking-wide">
                    পরিমাণ:
                  </label>
                  <div className="inline-flex items-center border border-gray-200 rounded-xl bg-gray-50 p-1">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-1.5 hover:bg-white text-gray-700 rounded-lg transition-colors cursor-pointer"
                      aria-label="কমান"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 text-sm font-bold font-mono text-[#252A25]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-1.5 hover:bg-white text-gray-700 rounded-lg transition-colors cursor-pointer"
                      aria-label="বাড়ান"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xs text-emerald-800 bg-[#E6F0D5] px-2.5 py-1 rounded-md font-medium">
                    স্টকে রয়েছে (In Stock)
                  </span>
                </div>

                {/* Actions: Add to Cart, Buy Now, WhatsApp */}
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="w-full py-3.5 px-4 bg-[#164B35] hover:bg-[#113928] text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{addedNotice ? "কার্টে যোগ হয়েছে!" : "কার্ট-এ যোগ করুন"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleBuyNow}
                      className="w-full py-3.5 px-4 bg-[#F28C28] hover:bg-[#db7a1d] text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center cursor-pointer"
                    >
                      এখনই কিনুন
                    </button>
                  </div>

                  {/* Direct WhatsApp Order */}
                  <button
                    type="button"
                    onClick={handleWhatsAppOrder}
                    className="w-full py-3 px-4 bg-white border border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#25D366]/30 text-[#25D366]" />
                    <span>WhatsApp-এ সরাসরি অর্ডার করুন (01949075850)</span>
                  </button>
                </div>
              </div>

              {/* Delivery and Guarantee Reassurance */}
              <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-3 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#164B35] shrink-0" />
                  <span>ক্যাশ অন ডেলিভারি প্রযোজ্য</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4A63C] shrink-0" />
                  <span>১০০% খাঁটি ও অপরিশোধিত মধু</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#164B35]/15 shadow-sm mb-14">
          <div className="flex items-center gap-4 border-b border-gray-200 pb-3 mb-6 text-sm font-bold">
            <button
              onClick={() => setActiveTab("desc")}
              className={`pb-2 transition-colors cursor-pointer ${
                activeTab === "desc"
                  ? "text-[#164B35] border-b-2 border-[#164B35]"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              বিস্তারিত বর্ণনা
            </button>
            <button
              onClick={() => setActiveTab("storage")}
              className={`pb-2 transition-colors cursor-pointer ${
                activeTab === "storage"
                  ? "text-[#164B35] border-b-2 border-[#164B35]"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              সংরক্ষণ ও পুষ্টি
            </button>
            <button
              onClick={() => setActiveTab("delivery")}
              className={`pb-2 transition-colors cursor-pointer ${
                activeTab === "delivery"
                  ? "text-[#164B35] border-b-2 border-[#164B35]"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              ডেলিভারি ও মোড়ক
            </button>
          </div>

          <div className="text-xs sm:text-sm text-[#252A25]/90 leading-relaxed space-y-4">
            {activeTab === "desc" && (
              <div>
                <p className="mb-3">{product.fullDescription}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {product.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#FFF9ED] border border-[#D4A63C]/30 text-[#164B35] text-xs rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "storage" && (
              <div className="space-y-3">
                <p>
                  <strong className="text-[#164B35]">সংরক্ষণ পদ্ধতি:</strong>{" "}
                  {product.storageInstructions}
                </p>
                <p>
                  খাঁটি মধু কখনো নষ্ট হয় না। মধুর স্বাভাবিক বৈশিষ্ট্য বজায় রাখতে রোদ
                  ও আর্দ্রতা থেকে দূরে রাখুন।
                </p>
              </div>
            )}

            {activeTab === "delivery" && (
              <div className="space-y-3">
                <p>
                  <strong className="text-[#164B35]">প্যাকিং:</strong>{" "}
                  {product.weightAndPackaging}
                </p>
                <p>
                  <strong className="text-[#164B35]">ডেলিভারি সময়সীমা:</strong>{" "}
                  {product.deliveryInfo}
                </p>
                <p className="text-gray-500 text-xs">
                  {deliveryConfig.packagingNote}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#164B35] mb-6">
              সম্পর্কিত অন্যান্য মধু
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.slice(0, 3).map((rel) => (
                <ProductCard key={rel.id} product={rel} navigate={navigate} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
