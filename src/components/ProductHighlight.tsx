import React from "react";
import { MessageCircle, Check, Sparkles, Scale, Tag } from "lucide-react";
import { BRAND_INFO } from "../data/brandData";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const ProductHighlight: React.FC = () => {
  return (
    <section id="products" className="py-16 sm:py-24 bg-[#0d120f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111813] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-emerald-500/25">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Product Image Column */}
            <div className="lg:col-span-6">
              <div className="relative">
                <ImagePlaceholder
                  label="[PRODUCT IMAGE PLACEHOLDER]"
                  hint="খাঁটি চাকের মধুর আসল প্যাকেট বা বয়ামের সুন্দর প্রোডাক্ট ছবি"
                  aspectRatio="aspect-square"
                  minHeight="min-h-[320px] sm:min-h-[400px]"
                  className="bg-[#152119]"
                />

                <div className="mt-4 flex items-center justify-between text-xs text-gray-400 px-1">
                  <span>ব্র্যান্ড: {BRAND_INFO.name}</span>
                  <span className="text-emerald-400 font-medium">
                    প্রাকৃতিক গুণাগুণ অক্ষুণ্ণ
                  </span>
                </div>
              </div>
            </div>

            {/* Product Details Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span>প্রধান খাদ্যপণ্য</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                আমাদের খাঁটি চাকের মধু
              </h2>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                প্রকৃতির স্বাভাবিক পরিবেশ থেকে সংগৃহীত খাঁটি চাকের মধু—যেখানে
                স্বাদ, গুণমান ও প্রাকৃতিকতার গুরুত্ব সবার আগে।
              </p>

              {/* Explicit Placeholders specified in requirements */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* Product Weight Placeholder */}
                <div className="p-4 rounded-xl border border-dashed border-emerald-500/50 bg-[#142018] flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                    <Scale className="w-4 h-4 text-emerald-400" />
                    <span>ওজন / পরিমাণ</span>
                  </div>
                  <div className="text-base font-bold text-emerald-200 tracking-tight">
                    [PRODUCT WEIGHT PLACEHOLDER]
                  </div>
                  <span className="text-[11px] text-gray-400 mt-0.5">
                    যেমন: ৫০০ গ্রাম / ১ কেজি
                  </span>
                </div>

                {/* Price Placeholder */}
                <div className="p-4 rounded-xl border border-dashed border-orange-500/50 bg-[#22160e] flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mb-1">
                    <Tag className="w-4 h-4 text-orange-400" />
                    <span>মূল্য</span>
                  </div>
                  <div className="text-base font-bold text-orange-200 tracking-tight">
                    [PRICE PLACEHOLDER]
                  </div>
                  <span className="text-[11px] text-gray-400 mt-0.5">
                    বর্তমান নির্ধারিত খুচরা মূল্য
                  </span>
                </div>
              </div>

              {/* Product key points */}
              <div className="space-y-2.5 mb-8 text-sm text-gray-300 w-full">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>সম্পূর্ণ অপরিশোধিত ও সরাসরি প্রাকৃতিক চাকের মিষ্টি সুবাস</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>কোনো ধরনের চিনি বা কৃত্রিম তরল মিশ্রণমুক্ত</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>স্বাস্থ্যসম্মত উপায়ে বোতলজাতকৃত</span>
                </div>
              </div>

              {/* Order Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-xl shadow-lg hover:shadow-orange-600/30 transition-all focus:outline-hidden focus:ring-2 focus:ring-orange-500/40"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>হোয়াটসঅ্যাপে অর্ডার করুন</span>
                </a>

                <div className="text-xs text-gray-400 text-center sm:text-left">
                  <span>হোয়াটসঅ্যাপে দাম ও বিস্তারিত জেনে নিন</span>
                  <div className="font-semibold text-emerald-300 mt-0.5">
                    {BRAND_INFO.whatsappNumber}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
