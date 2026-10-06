import React from "react";
import { MessageCircle, Phone, ArrowUpRight, ShieldCheck } from "lucide-react";
import { BRAND_INFO } from "../data/brandData";

export const OrderCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0a0d0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#0e1712] via-[#09100c] to-[#0e1712] border border-emerald-500/30 text-white p-8 sm:p-12 md:p-16 shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold mb-6 backdrop-blur-xs border border-white/10">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              <span>সহজ ও দ্রুত অর্ডার প্রক্রিয়া</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
              খাঁটি মধুর স্বাদ পেতে আজই অর্ডার করুন
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mb-10">
              আপনার অর্ডার বা যেকোনো তথ্যের জন্য আমাদের সঙ্গে যোগাযোগ করুন।
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {/* Primary CTA: WhatsApp */}
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-xl shadow-lg hover:shadow-orange-600/30 transition-all focus:outline-hidden focus:ring-2 focus:ring-orange-400"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>WhatsApp-এ অর্ডার করুন</span>
                <span className="text-xs bg-black/20 px-2 py-0.5 rounded-sm ml-1 font-mono">
                  {BRAND_INFO.whatsappNumber}
                </span>
              </a>

              {/* Secondary CTA: Phone Call */}
              <a
                href={BRAND_INFO.phoneUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-emerald-950 bg-white hover:bg-emerald-50 active:bg-emerald-100 rounded-xl transition-all shadow-md focus:outline-hidden"
              >
                <Phone className="w-5 h-5 text-emerald-800" />
                <span>কল করুন</span>
                <span className="text-xs bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-sm ml-1 font-mono">
                  {BRAND_INFO.phoneNumber}
                </span>
              </a>
            </div>

            <p className="text-xs text-emerald-200/70 mt-6">
              আমরা আপনার বার্তার দ্রুত উত্তর দিয়ে থাকি
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
