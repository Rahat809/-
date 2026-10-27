import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "../../data/products";
import { ProductCard } from "../products/ProductCard";
import { PageView } from "../../types";

interface FeaturedProductsProps {
  navigate: (view: PageView) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ navigate }) => {
  const featured = PRODUCTS.filter((p) => p.isFeatured);

  return (
    <section className="py-14 sm:py-20 bg-[#E6F0D5]/35 border-y border-[#164B35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#164B35] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F28C28]" />
              <span className="font-bengali">নির্বাচিত পণ্যসমূহ</span>
            </div>
            <h2 className="font-bengali bengali-section-heading text-2xl sm:text-3xl font-bold text-[#164B35] leading-[1.35]">
              বাঙালী ফুড স্পেশাল মধু
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
              সরাসরি মৌচাক ও ফুলের নির্যাস থেকে সংগৃহীত আমাদের সবচেয়ে জনপ্রিয় ও সমাদৃত প্রাকৃতিক মধু।
            </p>
          </div>

          <button
            onClick={() => navigate({ type: "products" })}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#164B35] hover:text-[#F28C28] transition-colors cursor-pointer"
          >
            <span className="font-bengali">সবগুলো দেখুন ({PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
};
