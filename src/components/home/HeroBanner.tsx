import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { PageView } from '../../types';
import { getWhatsAppClickUrl } from '../../utils/whatsapp';
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, CheckCircle2, Award } from 'lucide-react';
import heroBannerImg from '../../assets/images/hero_honey_banner_1793102911535.jpg';

interface HeroBannerProps {
  navigate: (view: PageView) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ navigate }) => {
  const whatsappUrl = getWhatsAppClickUrl(
    'আসসালামু আলাইকুম! বাঙালী ফুড থেকে খাঁটি মধু অর্ডার করতে আগ্রহী।'
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#164B35]/10 via-[#FFF9ED] to-[#FFF9ED] pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-neutral-100">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4A63C]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#E6F0D5]/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F0D5] text-[#164B35] text-xs font-semibold tracking-wide shadow-xs mx-auto lg:mx-0">
              <Sparkles className="w-3.5 h-3.5 text-[#F28C28]" />
              <span className="font-bengali">১০০% প্রাকৃতিক ও খাঁটি চাকের মধু</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#164B35]/30"></span>
              <span className="text-neutral-600 font-medium">{siteConfig.addressEnglish.split(',')[0]}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-bengali bengali-hero-title text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#164B35] tracking-tight leading-[1.35]">
              প্রকৃতির খাঁটি স্বাদ, <br className="hidden sm:inline" />
              <span className="text-[#F28C28]">বাঙালী ফুডের</span> সাথে আপনার ঘরে
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-neutral-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              সুন্দরবনের গহীন বন, কালোজিরা ফুলের মাঠ ও প্রাকৃতিক মৌচাক থেকে সংগ্রহকৃত অপরিশোধিত কাঁচা মধু (Raw Honey)। কোনো কৃত্রিম চিনি বা কেমিক্যাল নেই।
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => navigate({ type: 'products' })}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#F28C28] hover:bg-[#d97718] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
              >
                <span className="font-bengali font-semibold">সকল পণ্য দেখুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#164B35] hover:bg-[#103827] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-[#D4A63C]" />
                <span>WhatsApp-এ অর্ডার</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-neutral-200/60 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#164B35] shrink-0" />
                <span className="font-bengali font-semibold">১০০% অপমিশ্রিত মধু</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#164B35] shrink-0" />
                <span className="font-bengali font-semibold">ক্যাশ অন ডেলিভারি</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-800 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#164B35] shrink-0" />
                <span className="font-bengali font-semibold">হাতে পেয়ে চেক সুবিধা</span>
              </div>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Border frame */}
              <div className="p-2 sm:p-3 rounded-3xl bg-gradient-to-tr from-[#164B35] via-[#D4A63C] to-[#F28C28] shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-white aspect-4/3 sm:aspect-16/11">
                  <img
                    src={heroBannerImg}
                    alt="বাঙালী ফুড খাঁটি প্রাকৃতিক মধু"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 flex items-center justify-between border border-white/40 shadow-lg">
                    <div>
                      <p className="text-[11px] font-bold text-[#F28C28] uppercase tracking-wider">স্পেশাল সিলেকশন</p>
                      <h4 className="text-sm font-bold text-[#164B35]">প্রাকৃতিক চাকের তাজা মধু</h4>
                    </div>
                    <div className="bg-[#E6F0D5] px-2.5 py-1 rounded-lg text-xs font-bold text-[#164B35]">
                      সীমিত স্টক
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Guarantee Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3 shadow-xl border border-neutral-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E6F0D5] text-[#164B35] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#164B35]" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-neutral-500">গ্যারান্টি</p>
                  <p className="text-xs font-bold text-[#164B35]">ভেজালমুক্ত নিশ্চয়তা</p>
                </div>
              </div>

              {/* Floating Fast Delivery Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-3 shadow-xl border border-neutral-100 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFF9ED] text-[#F28C28] flex items-center justify-center shrink-0 border border-[#D4A63C]/30">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-neutral-500">যাত্রাবাড়ী, ঢাকা থেকে</p>
                  <p className="text-xs font-bold text-[#164B35]">সারাদেশে দ্রুত ডেলিভারি</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
