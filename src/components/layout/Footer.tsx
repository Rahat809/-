import React from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  ShieldCheck,
  Truck,
  RotateCcw,
  FileText,
} from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { CATEGORIES } from "../../data/categories";
import { BrandLogo } from "../common/BrandLogo";
import { getWhatsAppClickUrl } from "../../utils/whatsapp";
import { PageView } from "../../types";

interface FooterProps {
  navigate: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = getWhatsAppClickUrl(
    "আসসালামু আলাইকুম, আমি বাঙালী ফুড থেকে মধু অর্ডার ও পরামর্শ পেতে চাই।"
  );

  return (
    <footer className="bg-[#164B35] text-[#FFF9ED] pt-16 pb-10 border-t border-[#D4A63C]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#FFF9ED]/15">
          {/* 1. Brand Overview */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <button
              onClick={() => navigate({ type: "home" })}
              className="focus:outline-hidden text-left mb-3 cursor-pointer"
            >
              <BrandLogo variant="dark" />
            </button>

            <p className="text-xs sm:text-sm text-[#E6F0D5]/90 leading-relaxed mb-6 max-w-sm">
              বাঙালী ফুড একটি বাংলাদেশভিত্তিক মধু ও প্রাকৃতিক খাদ্যপণ্যের ব্র্যান্ড।
              আমরা নির্বাচিত খাঁটি মধু সরাসরি গ্রাম ও বনাঞ্চল থেকে সংগ্রহ করে পৌঁছে
              দিচ্ছি আপনার পরিবারের কাছে।
            </p>

            {/* Social & Contact Actions */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.facebookPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-10 h-10 rounded-full bg-[#0F3324] hover:bg-[#F28C28] text-white border border-[#D4A63C]/40 flex items-center justify-center transition-all shadow-xs"
                title="ফেসবুক পেজ"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#0F3324] hover:bg-[#25D366] text-white border border-[#D4A63C]/40 flex items-center justify-center transition-all shadow-xs"
                title="WhatsApp অর্ডার"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
              </a>
            </div>
          </div>

          {/* 2. Product Categories */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4A63C] mb-4 pb-1 border-b border-[#D4A63C]/30 inline-block">
              মৌলিক ক্যাটাগরি
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FFF9ED]/85">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => navigate({ type: "products", categorySlug: cat.slug })}
                    className="hover:text-[#D4A63C] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-[#D4A63C]">·</span>
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Quick & Policy Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4A63C] mb-4 pb-1 border-b border-[#D4A63C]/30 inline-block">
              জরুরি লিঙ্ক
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FFF9ED]/85">
              <li>
                <button
                  onClick={() => navigate({ type: "home" })}
                  className="hover:text-[#D4A63C] transition-colors cursor-pointer"
                >
                  হোম
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate({ type: "products" })}
                  className="hover:text-[#D4A63C] transition-colors cursor-pointer"
                >
                  সকল পণ্য
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate({ type: "about" })}
                  className="hover:text-[#D4A63C] transition-colors cursor-pointer"
                >
                  আমাদের সম্পর্কে
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate({ type: "contact" })}
                  className="hover:text-[#D4A63C] transition-colors cursor-pointer"
                >
                  যোগাযোগ
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate({ type: "policy", policyType: "delivery" })}
                  className="hover:text-[#D4A63C] transition-colors cursor-pointer"
                >
                  ডেলিভারি পলিসি
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate({ type: "policy", policyType: "refund" })}
                  className="hover:text-[#D4A63C] transition-colors cursor-pointer"
                >
                  রিটার্ন ও রিফান্ড
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate({ type: "policy", policyType: "privacy" })}
                  className="hover:text-[#D4A63C] transition-colors cursor-pointer"
                >
                  প্রাইভেসি পলিসি
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate({ type: "policy", policyType: "terms" })}
                  className="hover:text-[#D4A63C] transition-colors cursor-pointer"
                >
                  শর্তাবলী (Terms)
                </button>
              </li>
            </ul>
          </div>

          {/* 4. Contact Information */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4A63C] mb-4 pb-1 border-b border-[#D4A63C]/30 inline-block">
              যোগাযোগের ঠিকানা
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#FFF9ED]/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4A63C] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[#E6F0D5] text-xs block">অফিস / ঠিকানা:</span>
                  <span className="font-medium">{siteConfig.address}</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F28C28] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[#E6F0D5] text-xs block">সরাসরি ফোন:</span>
                  <a
                    href={`tel:${siteConfig.phoneNumber}`}
                    className="font-medium hover:text-[#F28C28] transition-colors"
                  >
                    {siteConfig.phoneNumber}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[#E6F0D5] text-xs block">WhatsApp:</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-[#25D366] transition-colors font-mono"
                  >
                    {siteConfig.whatsappNumber}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D4A63C] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[#E6F0D5] text-xs block">ইমেইল:</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-[#D4A63C] transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E6F0D5]/70 gap-4">
          <p>© {currentYear} Bangali Food. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>উদ্যোক্তা:</span>
            <span className="font-semibold text-white">{siteConfig.ownerName}</span>
            <span>·</span>
            <span>{siteConfig.address}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
