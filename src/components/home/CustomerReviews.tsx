import React from "react";
import { Quote, MessageSquareQuote, MessageCircle, Star } from "lucide-react";
import { getWhatsAppClickUrl } from "../../utils/whatsapp";

export const CustomerReviews: React.FC = () => {
  const verifiedReviews = [
    {
      id: "rev-1",
      customerName: "সম্মানিত ক্রেতা",
      productName: "খাঁটি প্রাকৃতিক চাকের মধু",
      quote:
        "বাঙালী ফুড-এর মধু একদম আসল ও দুর্দান্ত স্বাদের। ভেজালের ভিড়ে খাঁটি পণ্য পেয়ে খুব ভালো লাগলো।",
      rating: 5,
    },
    {
      id: "rev-2",
      customerName: "সম্মানিত ক্রেতা",
      productName: "কালোজিরা ও সরিষা মধু",
      quote:
        "প্যাকেজিং এবং ডেলিভারি সিস্টেম অনেক ভালো ছিল। কাঁচের বয়াম খুব সুন্দরভাবে নিরাপদে এসেছে। শুভকামনা 'বাঙালী ফুড'!",
      rating: 5,
    },
  ];

  const shareReviewUrl = getWhatsAppClickUrl(
    "আসসালামু আলাইকুম, আমি বাঙালী ফুড থেকে মধু নিয়েছি এবং আমার সন্তুষ্টির রিভিউ/মতামত শেয়ার করতে চাই:"
  );

  return (
    <section className="py-14 sm:py-20 bg-[#E6F0D5]/30 border-t border-[#164B35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#164B35] uppercase tracking-wider mb-2">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#F28C28]" />
            <span className="font-bengali">গ্রাহকদের মূল্যবান অভিজ্ঞতা</span>
          </div>
          <h2 className="font-bengali bengali-section-heading text-2xl sm:text-3xl font-bold text-[#164B35] mb-2 leading-[1.35]">
            আমাদের গ্রাহকরা কী বলছেন
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            গ্রাহকদের সন্তুষ্টি ও প্রকৃত মতামতই আমাদের সবচেয়ে বড় অনুপ্রেরণা।
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {verifiedReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#164B35]/15 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-7 h-7 text-[#D4A63C] rotate-180" />
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#F28C28] text-[#F28C28]"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#252A25] leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="font-bold text-[#164B35]">{rev.customerName}</span>
                <span className="text-gray-500">{rev.productName}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Share Feedback CTA */}
        <div className="text-center">
          <a
            href={shareReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#164B35]/30 text-xs font-semibold text-[#164B35] hover:bg-[#E6F0D5] transition-colors shadow-2xs"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>আপনিও আপনার অভিজ্ঞতা আমাদের সাথে শেয়ার করুন</span>
          </a>
        </div>
      </div>
    </section>
  );
};
