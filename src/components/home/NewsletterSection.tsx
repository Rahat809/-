import React, { useState } from "react";
import { Mail, CheckCircle2, Send } from "lucide-react";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section className="py-12 bg-[#E6F0D5]/50 border-t border-[#164B35]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-12 h-12 rounded-full bg-white border border-[#164B35]/20 flex items-center justify-center text-[#164B35] mx-auto mb-3 shadow-2xs">
          <Mail className="w-6 h-6" />
        </div>

        <h3 className="font-bengali bengali-section-heading text-xl sm:text-2xl font-bold text-[#164B35] mb-2 leading-[1.35]">
          নতুন মৌসুমের মধু ও অফারের আপডেট পান
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mb-6">
          সুন্দরবন, পাহাড় বা কালোজিরা মধু সংগ্রহের মৌসুম শুরু হলে সবার আগে তথ্য ও বিশেষ প্যাকেজ পেতে যুক্ত থাকুন।
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#164B35] text-white text-xs font-semibold rounded-full">
            <CheckCircle2 className="w-4 h-4 text-[#D4A63C]" />
            <span>ধন্যবাদ! আপনার ইমেইলটি সফলভাবে তালিকাভুক্ত হয়েছে।</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="আপনার ইমেইল ঠিকানা দিন..."
              required
              className="w-full sm:flex-1 px-4 py-2.5 text-xs sm:text-sm bg-white border border-[#164B35]/30 rounded-full focus:outline-hidden focus:border-[#164B35] text-[#252A25]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 bg-[#164B35] hover:bg-[#103828] text-white text-xs sm:text-sm font-semibold rounded-full shadow-2xs transition-colors cursor-pointer"
            >
              সাবস্ক্রাইব
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
