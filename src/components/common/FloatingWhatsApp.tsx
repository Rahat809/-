import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { buildWhatsAppUrl } from '../../utils/whatsapp';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMsg = 'আসসালামু আলাইকুম! বাঙালী ফুড থেকে খাঁটি মধু অর্ডার বা যেকোনো প্রশ্ন থাকলে জানতে চাচ্ছিলাম।';
  const waUrl = buildWhatsAppUrl(siteConfig.whatsappNumber, defaultMsg);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Speech bubble / Tooltip */}
      {showTooltip && (
        <div className="mb-2 relative hidden sm:flex items-center gap-2 bg-white text-[#164B35] px-4 py-2.5 rounded-2xl shadow-xl border border-neutral-100 text-xs font-medium animate-bounce duration-1000">
          <span>হোয়াটসঅ্যাপে সরাসরি অর্ডার বা প্রশ্ন করুন</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-neutral-400 hover:text-neutral-600 ml-1 p-0.5 rounded-full"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-neutral-100 rotate-45"></div>
        </div>
      )}

      {/* Pulsing circular button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="হোয়াটসঅ্যাপে চ্যাট করুন"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Glow pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
        <MessageCircle className="w-7 h-7 relative z-10" />

        {/* Quick hover badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F28C28] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#F28C28] border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
};
