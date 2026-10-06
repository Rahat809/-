import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Phone } from "lucide-react";
import { BRAND_INFO, NAV_LINKS } from "../data/brandData";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0a0d0b]/95 backdrop-blur-md shadow-lg border-b border-emerald-500/20"
          : "bg-[#0a0d0b] border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Zone: Brand name & Logo Placeholder */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="group flex items-center gap-2.5 focus:outline-hidden"
            >
              {/* Logo Placeholder Box */}
              <div
                className="w-10 h-10 rounded-lg border border-dashed border-emerald-500/50 bg-[#121c16] flex items-center justify-center text-[10px] text-emerald-300 text-center font-medium p-0.5 leading-tight select-none group-hover:border-emerald-400 transition-colors"
                title="[LOGO PLACEHOLDER — এখানে বাঙালী ফুডের Logo বসবে]"
              >
                লোগো
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  {BRAND_INFO.name}
                </span>
                <span className="hidden sm:inline-block text-[11px] text-emerald-400 font-medium -mt-1">
                  প্রাকৃতিক চাকের মধু
                </span>
              </div>
            </a>

            {/* Visual Logo Placeholder Badge for explicit transparency */}
            <span
              className="hidden lg:inline-flex text-[11px] text-emerald-300 bg-emerald-950/70 border border-emerald-800/70 px-2 py-0.5 rounded-md"
              title="[LOGO PLACEHOLDER — এখানে বাঙালী ফুডের Logo বসবে]"
            >
              [LOGO PLACEHOLDER]
            </span>
          </div>

          {/* Middle Zone: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-gray-300">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-emerald-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-orange-500 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Zone: Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-lg shadow-sm hover:shadow-orange-600/30 transition-all whitespace-nowrap focus:outline-hidden focus:ring-2 focus:ring-orange-500/40"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp-এ অর্ডার করুন</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp-এ অর্ডার করুন"
              className="p-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-hidden"
              aria-label={mobileMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-emerald-950 bg-[#0f1511] px-4 pt-3 pb-6 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-gray-200 hover:bg-emerald-950/60 hover:text-emerald-300 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-emerald-950/80 flex flex-col gap-2.5">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow-xs transition-colors"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>WhatsApp-এ অর্ডার করুন ({BRAND_INFO.whatsappNumber})</span>
              </a>

              <a
                href={BRAND_INFO.phoneUrl}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-emerald-300 bg-[#141e17] hover:bg-[#18271e] border border-emerald-800/60 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>সরাসরি কল করুন ({BRAND_INFO.phoneNumber})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
