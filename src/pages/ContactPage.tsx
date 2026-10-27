import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  Clock, 
  CheckCircle2, 
  Facebook,
  ShieldCheck,
  Truck
} from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { BrandLogo } from '../components/common/BrandLogo';
import { PageView } from '../types';

interface ContactPageProps {
  navigate?: (view: PageView) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'পণ্য সম্পর্কে তথ্য',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert('অনুগ্রহ করে আপনার নাম, মোবাইল নম্বর এবং বার্তা লিখুন।');
      return;
    }

    // Direct WhatsApp message formatting
    const inquiryText = `*বাঙালী ফুড - নতুন কাস্টমার অনুসন্ধান*\n\n` +
      `👤 *নাম:* ${formData.name}\n` +
      `📞 *ফোন:* ${formData.phone}\n` +
      `📌 *বিষয়:* ${formData.subject}\n` +
      `💬 *বার্তা:* ${formData.message}\n\n` +
      `_বাঙালী ফুড ওয়েবসাইট থেকে প্রেরিত_`;

    const waUrl = buildWhatsAppUrl(siteConfig.whatsappNumber, inquiryText);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex justify-center mb-5">
            <BrandLogo size="lg" />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F0D5] text-[#164B35] text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageCircle className="w-4 h-4 text-[#F28C28]" />
            যোগাযোগ ও কাস্টমার কেয়ার
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#164B35] mb-4">
            আমাদের সাথে যোগাযোগ করুন
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            মধু বা প্রাকৃতিক পণ্য সম্পর্কিত যেকোনো তথ্য, বাল্ক অর্ডার কিংবা কোনো অনুসন্ধানের জন্য সরাসরি আমাদের সাথে কল, হোয়াটসঅ্যাপ বা মেসেজের মাধ্যমে কথা বলুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-100">
              <h2 className="text-xl font-bold text-[#164B35] mb-6 flex items-center gap-2">
                <span>আমাদের ঠিকানা ও যোগাযোগের মাধ্যম</span>
              </h2>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E6F0D5] flex items-center justify-center shrink-0 text-[#164B35]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#252A25] text-sm mb-1">অফিস / ঠিকানা</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {siteConfig.address} ({siteConfig.addressEnglish})
                    </p>
                    <span className="text-xs text-neutral-400 mt-1 block">অনলাইন ও হোম ডেলিভারি ভিত্তিক সার্ভিস</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E6F0D5] flex items-center justify-center shrink-0 text-[#164B35]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#252A25] text-sm mb-1">সরাসরি ফোন করুন</h3>
                    <a 
                      href={`tel:${siteConfig.phoneNumber}`} 
                      className="text-base font-bold text-[#164B35] hover:text-[#F28C28] transition-colors block"
                    >
                      {siteConfig.phoneNumber}
                    </a>
                    <span className="text-xs text-neutral-500">সকাল ৯টা হতে রাত ১১টা পর্যন্ত</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#252A25] text-sm mb-1">হোয়াটসঅ্যাপ চ্যাট</h3>
                    <p className="text-xs text-neutral-500 mb-2">যেকোনো প্রশ্ন বা দ্রুত অর্ডারের জন্য মেসেজ পাঠান</p>
                    <a
                      href={buildWhatsAppUrl(siteConfig.whatsappNumber, 'আসসালামু আলাইকুম! বাঙালী ফুড থেকে মধু অর্ডার বা তথ্য জানতে চাচ্ছি।')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:bg-emerald-600 transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      হোয়াটসঅ্যাপে মেসেজ পাঠান
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E6F0D5] flex items-center justify-center shrink-0 text-[#164B35]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#252A25] text-sm mb-1">ইমেইল</h3>
                    <a 
                      href={`mailto:${siteConfig.email}`} 
                      className="text-sm text-neutral-700 hover:text-[#F28C28] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E6F0D5] flex items-center justify-center shrink-0 text-[#164B35]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#252A25] text-sm mb-1">কার্যক্রমের সময়সূচী</h3>
                    <p className="text-neutral-600 text-sm">
                      সপ্তাহের ৭ দিনই ২৪ ঘণ্টা ওয়েবসাইট এবং হোয়াটসঅ্যাপে অর্ডার গ্রহণ করা হয়।
                    </p>
                  </div>
                </li>
              </ul>

              {/* Social Link */}
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">আমাদের অফিসিয়াল ফেসবুক পেজ</h4>
                <a
                  href={siteConfig.facebookPageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Facebook className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-xs font-bold text-blue-900">Facebook.com/বাঙালী ফুড</p>
                      <p className="text-[11px] text-blue-700">নিয়মিত ভিডিও, গ্রাহক রিভিউ ও আপডেট দেখতে ভিজিট করুন</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform">ভিজিট →</span>
                </a>
              </div>
            </div>

            {/* Quick trust box */}
            <div className="bg-[#164B35] text-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#D4A63C]" />
                আমাদের অঙ্গীকার
              </h3>
              <p className="text-xs text-[#E6F0D5] leading-relaxed mb-4">
                আমরা কোনো কৃত্রিম চিনি বা ভেজাল মিশ্রিত মধু বিক্রি করি না। প্রতিটি ড্রপ মধু প্রাকৃতিক সোর্স থেকে সংগৃহীত। পণ্য হাতে পেয়ে চেক করে নেওয়ার নিশ্চয়তা দিচ্ছি।
              </p>
              <div className="flex items-center gap-2 text-xs text-[#D4A63C]">
                <Truck className="w-4 h-4 text-[#F28C28]" />
                <span>সারা বাংলাদেশে নির্ভরযোগ্য কুরিয়ারে দ্রুত ডেলিভারি</span>
              </div>
            </div>
          </div>

          {/* Contact & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-neutral-100">
              <h2 className="text-2xl font-bold text-[#164B35] mb-2">
                আমাদের মেসেজ পাঠান
              </h2>
              <p className="text-neutral-500 text-sm mb-8">
                নিচের ফর্মটি পূরণ করে সাবমিট করুন। আমরা দ্রুততম সময়ে আপনার সাথে যোগাযোগ করব অথবা সরাসরি হোয়াটসঅ্যাপে মেসেজ ওপেন হবে।
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm">মেসেজ সফলভাবে পাঠানো হয়েছে!</h4>
                    <p className="text-xs mt-1 text-emerald-700">
                      আপনার অনুরোধ অনুযায়ী হোয়াটসঅ্যাপে মেসেজ প্রস্তুত করা হয়েছে। আমরা শীঘ্রই রিপ্লাই দিচ্ছি।
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      আপনার নাম <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="যেমন: মো: আরিফুল ইসলাম"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#164B35] bg-[#FFF9ED]/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      মোবাইল নম্বর <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="যেমন: 017XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#164B35] bg-[#FFF9ED]/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                    অনুসন্ধানের বিষয়
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#164B35] bg-white"
                  >
                    <option value="পণ্য সম্পর্কে তথ্য">পণ্য ও মধুর জাত সম্পর্কে তথ্য</option>
                    <option value="অর্ডার স্ট্যাটাস">চলমান অর্ডারের স্ট্যাটাস জানতে চাই</option>
                    <option value="বাল্ক বা পাইকারি অর্ডার">পাইকারি বা বড় পরিমাণের অর্ডার</option>
                    <option value="অভিযোগ বা পরামর্শ">অভিযোগ বা মূল্যবান পরামর্শ</option>
                    <option value="অন্যান্য বিষয়">অন্যান্য অনুসন্ধান</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                    আপনার বার্তা বা প্রশ্ন <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="আপনার প্রশ্ন বিস্তারিত লিখুন..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#164B35] bg-[#FFF9ED]/30 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#F28C28] hover:bg-[#d97718] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>মেসেজ পাঠান (হোয়াটসঅ্যাপে সংযোগ হবে)</span>
                  </button>
                </div>

                <p className="text-xs text-neutral-400 text-center sm:text-left mt-3">
                  সরাসরি কথা বলতে কল করুন: <a href={`tel:${siteConfig.phoneNumber}`} className="text-[#164B35] font-bold underline">{siteConfig.phoneNumber}</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
