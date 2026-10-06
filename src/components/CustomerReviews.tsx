import React from "react";
import { Quote, Star } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      id: "review-1",
      quote:
        "বাঙালী ফুড-এর মধু একদম আসল ও দুর্দান্ত স্বাদের। ভেজালের ভিড়ে খাঁটি পণ্য পেয়ে খুব ভালো লাগলো।",
      badge: "সন্তুষ্ট ক্রেতা",
    },
    {
      id: "review-2",
      quote:
        "প্যাকেজিং এবং ডেলিভারি সিস্টেম অনেক ভালো ছিল। শুভকামনা 'বাঙালী ফুড'!",
      badge: "সন্তুষ্ট ক্রেতা",
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#0a0d0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-semibold text-emerald-400 uppercase tracking-wider">
            সরাসরি অভিজ্ঞতা
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 mb-3">
            আমাদের গ্রাহকরা কী বলছেন
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            গ্রাহকদের সন্তুষ্টি ও প্রকৃত মতামতই আমাদের সবচেয়ে বড় অনুপ্রেরণা।
          </p>
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 2 Actual Reviews Provided by User */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#111813] rounded-2xl p-6 sm:p-8 border border-emerald-500/20 flex flex-col justify-between hover:border-emerald-500/50 hover:bg-[#15211a] hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-orange-400 rotate-180" />
                  {/* Rating placeholder as requested */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-dashed border-amber-500/50 bg-[#251b10] text-[11px] font-medium text-amber-300">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>[RATING PLACEHOLDER]</span>
                  </div>
                </div>

                <p className="text-gray-200 text-base sm:text-lg leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Customer Photo Placeholder & Meta */}
              <div className="pt-4 border-t border-emerald-950/80 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-dashed border-emerald-500/50 bg-[#16221b] flex items-center justify-center text-[9px] text-center text-emerald-300 font-medium shrink-0 leading-tight p-1">
                  [CUSTOMER PHOTO]
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">
                    সম্মানিত গ্রাহক #{idx + 1}
                  </div>
                  <div className="text-[11px] text-gray-400">
                    [CUSTOMER PHOTO PLACEHOLDER]
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
