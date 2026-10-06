import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, Send, Facebook } from "lucide-react";
import { BRAND_INFO } from "../data/brandData";

export const ContactSection: React.FC = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerLocation, setCustomerLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleQuickWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `আসসালামু আলাইকুম, বাঙালী ফুড।`;
    if (customerName.trim()) {
      text += `\nআমার নাম: ${customerName.trim()}`;
    }
    if (customerLocation.trim()) {
      text += `\nঠিকানা / এলাকা: ${customerLocation.trim()}`;
    }
    if (message.trim()) {
      text += `\nবার্তা: ${message.trim()}`;
    } else {
      text += `\nআমি খাঁটি চাকের মধু সম্পর্কে বিস্তারিত জানতে ও অর্ডার করতে আগ্রহী।`;
    }

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/880${BRAND_INFO.whatsappNumber}?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0a0d0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-semibold text-emerald-400 uppercase tracking-wider">
            সরাসরি যুক্ত হোন
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 mb-3">
            যোগাযোগ করুন
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            যেকোনো তথ্য, পরামর্শ বা অর্ডারের জন্য আমাদের সাথে যোগাযোগ করতে পারেন।
          </p>
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Contact Details List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-[#111813] border border-emerald-500/25 hover:border-emerald-500/60 hover:bg-[#152119] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-white/20" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-orange-400 uppercase tracking-wide">
                    WhatsApp (অর্ডার ও চ্যাট)
                  </div>
                  <div className="text-lg font-bold text-white mt-0.5">
                    {BRAND_INFO.whatsappNumber}
                  </div>
                  <span className="text-xs text-emerald-300 font-medium inline-flex items-center gap-1 mt-1">
                    সরাসরি চ্যাট করতে ক্লিক করুন
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={BRAND_INFO.phoneUrl}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-[#111813] border border-emerald-500/15 hover:border-emerald-500/40 hover:bg-[#152119] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-900 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    সরাসরি ফোন
                  </div>
                  <div className="text-lg font-bold text-white mt-0.5">
                    {BRAND_INFO.phoneNumber}
                  </div>
                  <span className="text-xs text-gray-400 mt-1 block">
                    কল করতে ক্লিক করুন
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={BRAND_INFO.emailUrl}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-[#111813] border border-emerald-500/15 hover:border-emerald-500/40 hover:bg-[#152119] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    ইমেইল
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white break-all mt-0.5">
                    {BRAND_INFO.email}
                  </div>
                  <span className="text-xs text-gray-400 mt-1 block">
                    মেইল পাঠাতে ক্লিক করুন
                  </span>
                </div>
              </a>

              {/* Address Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#111813] border border-emerald-500/15">
                <div className="w-12 h-12 rounded-xl bg-amber-800/80 text-amber-200 flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    ঠিকানা
                  </div>
                  <div className="text-lg font-bold text-white mt-0.5">
                    {BRAND_INFO.address}
                  </div>
                  <span className="text-xs text-gray-400 mt-1 block">
                    বাংলাদেশ
                  </span>
                </div>
              </div>
            </div>

            {/* Facebook Page Social Card */}
            <div className="p-5 rounded-2xl bg-[#0f1712] border border-emerald-500/25 text-white">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                  অফিসিয়াল সোশ্যাল মিডিয়া
                </span>
                <Facebook className="w-5 h-5 text-emerald-400" />
              </div>
              <h4 className="text-base font-bold mb-2">
                বাঙালী ফুড Facebook পেইজ
              </h4>
              <p className="text-xs text-emerald-200/80 mb-4 leading-relaxed">
                পেইজে লাইক দিয়ে আমাদের সাথে যুক্ত থাকুন ও নতুন আপডেট পান।
              </p>
              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-950 hover:bg-emerald-100 rounded-lg text-xs font-bold transition-colors"
              >
                <span>Facebook পেইজে যান</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Message / WhatsApp Helper Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#111813] p-6 sm:p-8 rounded-3xl border border-emerald-500/20 shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                  সহজ ইনকোয়ারি
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  দ্রুত বার্তা পাঠান
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  তথ্য পূরণ করে বাটনে চাপ দিলে সরাসরি WhatsApp-এ প্রস্তুত করা মেসেজটি চলে যাবে।
                </p>
              </div>

              <form onSubmit={handleQuickWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    আপনার নাম
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="আপনার শুভ নাম লিখুন"
                    className="w-full px-4 py-3 text-sm bg-[#16211a] border border-emerald-950/80 rounded-xl text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    আপনার এলাকা / ঠিকানা
                  </label>
                  <input
                    type="text"
                    value={customerLocation}
                    onChange={(e) => setCustomerLocation(e.target.value)}
                    placeholder="যেমন: ঢাকা, চট্টগ্রাম, বা আপনার ডেলিভারি এলাকা"
                    className="w-full px-4 py-3 text-sm bg-[#16211a] border border-emerald-950/80 rounded-xl text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    আপনার বার্তা বা মধুর পরিমাণ
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="মধু সম্পর্কে যা জানতে চান বা কতটুকু মধু প্রয়োজন..."
                    className="w-full px-4 py-3 text-sm bg-[#16211a] border border-emerald-950/80 rounded-xl text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-hidden transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-white bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  <Send className="w-5 h-5 text-orange-400" />
                  <span>WhatsApp-এ সরাসরি পাঠান</span>
                </button>

                <p className="text-[11px] text-gray-400 text-center">
                  বাটন চাপলে {BRAND_INFO.whatsappNumber} নম্বরে WhatsApp চ্যাট খুলে যাবে।
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
