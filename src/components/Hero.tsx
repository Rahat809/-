import React from "react";
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { BRAND_INFO } from "../data/brandData";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-b from-[#0a0d0b] via-[#0d1410] to-[#0a0d0b] py-12 sm:py-16 md:py-24"
    >
      {/* Subtle organic background accent */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-emerald-900/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-orange-950/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Organic Brand Kicker - Clean unboxed metadata style */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 tracking-wide mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block shadow-[0_0_8px_#10b981]" />
              <span>বাঙালী ফুড · প্রাকৃতিক ও অর্গানিক</span>
              <span className="text-gray-600">·</span>
              <span className="text-orange-400 font-medium">সরাসরি চাক থেকে</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.25] text-balance mb-5">
              শতভাগ খাঁটি ও প্রাকৃতিক চাকের মধু
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
              প্রকৃতির চাক থেকে সংগৃহীত খাঁটি মধু—আপনার ও আপনার পরিবারের জন্য
              প্রাকৃতিক স্বাদ ও পুষ্টির নিশ্চয়তা।
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-xl shadow-lg hover:shadow-orange-600/30 transition-all focus:outline-hidden focus:ring-2 focus:ring-orange-500/40"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>হোয়াটসঅ্যাপে অর্ডার করুন</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-emerald-200 bg-[#141f18] hover:bg-[#1a2a20] border border-emerald-500/30 rounded-xl transition-all"
              >
                <span>আমাদের সম্পর্কে জানুন</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            {/* Reassurance points */}
            <div className="pt-4 border-t border-emerald-950/60 w-full grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>১০০% প্রাকৃতিক নিশ্চয়তা</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>রাসায়নিক বা চিনিমুক্ত</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>স্বাস্থ্যসম্মত সংগ্রহ পদ্ধতি</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Product Image Placeholder */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Elements */}
              <div className="absolute -inset-1.5 bg-linear-to-tr from-emerald-500/20 via-orange-500/20 to-emerald-500/20 rounded-3xl blur-md -z-10" />

              <div className="bg-[#101712] p-3 rounded-2xl shadow-2xl border border-emerald-500/30">
                <ImagePlaceholder
                  label="[HERO PRODUCT IMAGE PLACEHOLDER — এখানে খাঁটি চাকের মধুর ছবি বসবে]"
                  hint="প্রাকৃতিক মৌচাক বা প্রিমিয়াম কাঁচের বয়ামে রাখা চাকের মধুর স্পষ্ট ছবি"
                  aspectRatio="aspect-4/3"
                  minHeight="min-h-[300px] sm:min-h-[360px]"
                  className="bg-[#141d17]"
                />

                <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-xs text-gray-400">
                  <span className="font-medium text-emerald-300">
                    বাঙালী ফুড খাঁটি মধু
                  </span>
                  <span>স্বাভাবিক রঙ ও ঘনত্বের আসল মধু</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
