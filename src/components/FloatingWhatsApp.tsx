import React from "react";
import { MessageCircle } from "lucide-react";
import { BRAND_INFO } from "../data/brandData";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp Order" className="fixed bottom-5 right-5 z-50 group">
      <a
        href={BRAND_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="অর্ডার করতে WhatsApp করুন"
        className="flex items-center gap-2.5 px-3.5 py-3 sm:px-4 sm:py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-emerald-600/40 transition-all transform hover:-translate-y-1 focus:outline-hidden focus:ring-4 focus:ring-emerald-400/40"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
        </span>

        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white/20 shrink-0" />

        <span className="hidden sm:inline font-semibold text-sm whitespace-nowrap">
          অর্ডার করতে WhatsApp করুন
        </span>
      </a>
    </aside>
  );
};
