import React from "react";
import { ArrowRight, Layers } from "lucide-react";
import { CATEGORIES } from "../../data/categories";
import { PageView } from "../../types";

interface CategorySectionProps {
  navigate: (view: PageView) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ navigate }) => {
  return (
    <section className="py-14 sm:py-20 bg-[#FFF9ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#164B35] uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5 text-[#D4A63C]" />
              <span className="font-bengali">মধুর অনন্য বৈচিত্র্য</span>
            </div>
            <h2 className="font-bengali bengali-section-heading text-2xl sm:text-3xl font-bold text-[#164B35] leading-[1.35]">
              ক্যাটাগরি অনুযায়ী বেছে নিন
            </h2>
          </div>
          <button
            onClick={() => navigate({ type: "products" })}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#164B35] hover:text-[#F28C28] transition-colors cursor-pointer"
          >
            <span className="font-bengali">সকল ক্যাটাগরি</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 5 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate({ type: "products", categorySlug: cat.slug })}
              className="group bg-white rounded-2xl border border-[#164B35]/15 hover:border-[#164B35]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#E6F0D5]/50">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Text Info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bengali bengali-card-title text-base font-semibold text-[#164B35] group-hover:text-[#F28C28] transition-colors mb-1.5 leading-[1.4]">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#164B35]">
                  <span className="font-bengali">পণ্য দেখুন</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4A63C] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
