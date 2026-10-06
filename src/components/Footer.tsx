import React from "react";
import { MessageCircle, Phone, Mail, MapPin, Facebook, Heart } from "lucide-react";
import { BRAND_INFO, NAV_LINKS } from "../data/brandData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050806] text-white pt-16 pb-12 border-t border-emerald-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-lg border border-dashed border-emerald-500/50 bg-[#121c16] flex items-center justify-center text-[10px] text-emerald-300 text-center font-medium">
                লোগো
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                {BRAND_INFO.name}
              </span>
            </div>

            <p className="text-sm font-medium text-emerald-400 mb-4">
              {BRAND_INFO.tagline}
            </p>

            <p className="text-xs text-gray-400 leading-relaxed mb-6 max-w-sm">
              আমরা বিশ্বাস করি সুস্থ জীবনের মূল চাবিকাঠি হলো খাঁটি ও পুষ্টিকর খাদ্য।
              প্রকৃতির চাক থেকে সংগৃহীত খাঁটি খাদ্যপণ্য পৌঁছে দিচ্ছি আপনার দোরগোড়ায়।
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-10 h-10 rounded-lg bg-[#141e18] hover:bg-orange-600 border border-white/10 text-white flex items-center justify-center transition-colors"
                title="Facebook পেইজ"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-lg bg-[#141e18] hover:bg-emerald-600 border border-white/10 text-white flex items-center justify-center transition-colors"
                title="WhatsApp চ্যাট"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-4">
              দ্রুত লিঙ্কসমূহ
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/80">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-4">
              যোগাযোগ
            </h4>
            <ul className="space-y-3.5 text-sm text-emerald-100/80">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-400 mt-1 shrink-0" />
                <div>
                  <span className="text-xs text-emerald-300 block">ফোন</span>
                  <a
                    href={BRAND_INFO.phoneUrl}
                    className="text-white hover:text-orange-300 font-semibold transition-colors"
                  >
                    {BRAND_INFO.phoneNumber}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <span className="text-xs text-emerald-300 block">WhatsApp</span>
                  <a
                    href={BRAND_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-300 font-semibold transition-colors"
                  >
                    {BRAND_INFO.whatsappNumber}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-400 mt-1 shrink-0" />
                <div>
                  <span className="text-xs text-emerald-300 block">ইমেইল</span>
                  <a
                    href={BRAND_INFO.emailUrl}
                    className="text-white hover:text-orange-300 transition-colors break-all"
                  >
                    {BRAND_INFO.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <span className="text-xs text-emerald-300 block">ঠিকানা</span>
                  <span className="text-white">{BRAND_INFO.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom: Copyright & Owner */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/70 gap-4">
          <p>© {BRAND_INFO.year} {BRAND_INFO.name}. সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center gap-2">
            <span>উদ্যোক্তা ও স্বত্বাধিকারী:</span>
            <span className="font-semibold text-white">{BRAND_INFO.founder}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
