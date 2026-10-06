import React from "react";
import { User, Award, Heart } from "lucide-react";
import { BRAND_INFO } from "../data/brandData";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#0a0d0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Side: Image Placeholder */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-emerald-950/60 rounded-3xl -rotate-1 -z-10" />
              <div className="bg-[#111813] p-3 rounded-2xl shadow-xl border border-emerald-500/25">
                <ImagePlaceholder
                  label="[ABOUT US IMAGE PLACEHOLDER]"
                  hint="প্রতিষ্ঠানের কাজ, প্রাকৃতিক চাক থেকে মধু সংগ্রহ বা প্রতিষ্ঠাতা ও টিমের ছবি"
                  aspectRatio="aspect-4/3"
                  minHeight="min-h-[300px] sm:min-h-[360px]"
                  className="bg-[#152119]"
                />

                <div className="mt-4 p-3 bg-[#15221a] rounded-xl border border-emerald-900/50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold text-emerald-200">
                      প্রতিষ্ঠাতা: {BRAND_INFO.founder}
                    </span>
                  </div>
                  <span className="text-gray-400">{BRAND_INFO.name}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <span className="text-xs sm:text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              আমাদের গল্প ও লক্ষ্য
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              আমাদের সম্পর্কে
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed text-base sm:text-lg">
              <p className="font-semibold text-emerald-300 text-lg sm:text-xl">
                বাঙালী ফুড-এ আপনাকে স্বাগতম!
              </p>

              <p>
                আমরা বিশ্বাস করি সুস্থ জীবনের মূল চাবিকাঠি হলো খাঁটি ও পুষ্টিকর
                খাদ্য। আপনার ও আপনার পরিবারের স্বাস্থ্য সুরক্ষায় আমরা নিয়ে
                এসেছি সম্পূর্ণ প্রাকৃতিক ও ভেজালমুক্ত খাদ্যপণ্য।
              </p>

              <p>
                আমাদের খাঁটি মধু সরাসরি প্রাকৃতিক চাক থেকে সংগ্রহ করা হয়, যা
                আপনাকে দেয় আসল স্বাদ ও পুষ্টি।
              </p>
            </div>

            {/* Founder Card */}
            <div className="mt-8 pt-6 border-t border-emerald-950/80 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  মালিক ও প্রতিষ্ঠাতা
                </p>
                <p className="text-lg font-bold text-white mt-0.5">
                  {BRAND_INFO.founder}
                </p>
                <p className="text-xs text-emerald-400">
                  {BRAND_INFO.name} · {BRAND_INFO.address}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#141f18] text-emerald-300 text-xs font-medium border border-emerald-700/40">
                <Heart className="w-4 h-4 text-orange-400 fill-orange-400/30" />
                <span>প্রকৃতির শতভাগ খাঁটি অঙ্গীকার</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
