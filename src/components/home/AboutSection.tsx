import React from "react";
import { ArrowRight, User, MapPin, Calendar, Heart } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { PageView } from "../../types";

interface AboutSectionProps {
  navigate: (view: PageView) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ navigate }) => {
  return (
    <section className="py-14 sm:py-20 bg-[#FFF9ED] border-t border-[#164B35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Showcase Box */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-[#D4A63C]/20 rounded-3xl -rotate-1 -z-10" />
              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-lg border border-[#164B35]/15 overflow-hidden">
                <img
                  src="/images/hero_honey_banner_1793102911535.jpg"
                  alt="বাঙালী ফুড মধু সংগ্রহ"
                  className="w-full aspect-4/3 object-cover rounded-xl mb-4"
                />

                <div className="p-3 bg-[#FFF9ED] rounded-xl border border-[#D4A63C]/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#164B35]" />
                    <span className="font-bold text-[#164B35]">
                      উদ্যোক্তা: {siteConfig.ownerName}
                    </span>
                  </div>
                  <span className="text-gray-500 font-medium">প্রতিষ্ঠা: {siteConfig.foundedYear}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Description */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4A63C] uppercase tracking-wider mb-2">
              <Heart className="w-3.5 h-3.5 text-[#F28C28]" />
              <span className="font-bengali">আমাদের পরিচয় ও আদর্শ</span>
            </div>

            <h2 className="font-bengali bengali-section-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#164B35] mb-4 leading-[1.35]">
              {siteConfig.about.heading}
            </h2>

            <p className="text-base sm:text-lg text-[#252A25]/90 leading-relaxed mb-6">
              {siteConfig.about.intro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 bg-white rounded-xl border border-[#164B35]/15 shadow-2xs">
                <span className="font-bengali text-xs text-gray-500 block mb-0.5">মালিকানা ও উদ্যোক্তা</span>
                <span className="font-bengali text-base font-bold text-[#164B35]">{siteConfig.ownerName}</span>
                <span className="text-xs text-gray-400 block mt-0.5">{siteConfig.brandNameEnglish}</span>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#164B35]/15 shadow-2xs">
                <span className="font-bengali text-xs text-gray-500 block mb-0.5">মূল কার্যালয়</span>
                <span className="font-bengali text-base font-bold text-[#164B35]">{siteConfig.address}</span>
                <span className="text-xs text-gray-400 block mt-0.5">বাংলাদেশ</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate({ type: "about" })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#164B35] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#113928] transition-colors cursor-pointer"
              >
                <span>আরও বিস্তারিত জানুন</span>
                <ArrowRight className="w-4 h-4 text-[#D4A63C]" />
              </button>

              <button
                onClick={() => navigate({ type: "contact" })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#164B35]/30 text-[#164B35] text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#E6F0D5] transition-colors cursor-pointer"
              >
                <span>যোগাযোগ করুন</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
