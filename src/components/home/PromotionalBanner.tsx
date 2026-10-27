import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { PageView } from "../../types";

interface PromotionalBannerProps {
  navigate: (view: PageView) => void;
}

export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({ navigate }) => {
  return (
    <section className="py-10 sm:py-14 bg-[#FFF9ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[#164B35] via-[#103828] to-[#164B35] text-white p-8 sm:p-12 lg:p-16 shadow-xl border border-[#D4A63C]/30">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 rounded-full bg-[#F28C28]/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-72 h-72 rounded-full bg-[#D4A63C]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F0D5]/20 text-[#E6F0D5] text-xs font-semibold mb-4 border border-[#E6F0D5]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A63C]" />
              <span className="font-bengali">বাঙালী ফুড স্পেশাল কালেকশন</span>
            </div>

            <h2 className="font-bengali bengali-section-heading text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-white mb-4 leading-[1.35]">
              {siteConfig.promoBanner.heading}
            </h2>

            <p className="text-sm sm:text-base text-[#E6F0D5]/90 leading-relaxed mb-8 max-w-xl">
              {siteConfig.promoBanner.subheading}
            </p>

            <button
              onClick={() => navigate({ type: "products" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold text-[#164B35] bg-[#FFF9ED] hover:bg-white rounded-xl shadow-lg transition-all cursor-pointer"
            >
              <span className="font-bengali">{siteConfig.promoBanner.buttonText}</span>
              <ArrowRight className="w-4 h-4 text-[#F28C28]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
