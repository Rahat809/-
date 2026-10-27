import React from "react";
import { ArrowRight, Flame } from "lucide-react";
import { PRODUCTS } from "../../data/products";
import { ProductCard } from "../products/ProductCard";
import { PageView } from "../../types";

interface BestSellingSectionProps {
  navigate: (view: PageView) => void;
}

export const BestSellingSection: React.FC<BestSellingSectionProps> = ({ navigate }) => {
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);

  return (
    <section className="py-14 sm:py-20 bg-[#FFF9ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F28C28] uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5 text-[#F28C28]" />
              <span className="font-bengali">জনপ্রিয় পছন্দ</span>
            </div>
            <h2 className="font-bengali bengali-section-heading text-2xl sm:text-3xl font-bold text-[#164B35] leading-[1.35]">
              সেরা বিক্রিত মধু
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
              গ্রাহকদের সর্বাধিক পছন্দের তালিকায় থাকা খাঁটি মধুর জনপ্রিয় কালেকশন।
            </p>
          </div>

          <button
            onClick={() => navigate({ type: "products" })}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#164B35] hover:text-[#F28C28] transition-colors cursor-pointer"
          >
            <span className="font-bengali">সবগুলো দেখুন</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
};
