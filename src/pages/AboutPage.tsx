import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  Award, 
  MapPin, 
  Phone, 
  Users, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { BrandLogo } from '../components/common/BrandLogo';
import { PageView } from '../types';

interface AboutPageProps {
  navigate: (view: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div className="min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <BrandLogo size="xl" />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F0D5] text-[#164B35] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#F28C28]" />
            আমাদের পরিচিতি ও অঙ্গীকার
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#164B35] tracking-tight mb-6">
            শতভাগ খাঁটি ও প্রাকৃতিক খাবারের প্রতিশ্রুতি নিয়ে <span className="text-[#F28C28]">বাঙালী ফুড</span>
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            ভেজাল ও কৃত্রিম প্রক্রিয়াজাত খাদ্যের ভিড়ে মানুষের ঘরে ঘরে প্রকৃতির খাঁটি স্বাদ ও পুষ্টি পৌঁছে দেওয়ার দৃঢ় প্রত্যয় নিয়ে যাত্রা শুরু করেছে বাঙালী ফুড।
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#164B35]">
              কীভাবে শুরু হলো আমাদের পথচলা?
            </h2>
            <p>
              বর্তমান বাজারে খাঁটি মধু ও পুষ্টিকর প্রাকৃতিক খাবার খুঁজে পাওয়া এক বড় চ্যালেঞ্জ। বিভিন্ন প্রক্রিয়াজাতকরণ ও কৃত্রিম চিনি মেশানো মধুর ভীড়ে আসল প্রাকৃতিক মধুর গুণাগুণ হারিয়ে যাচ্ছে।
            </p>
            <p>
              এই সমস্যার সমাধানের লক্ষ্য নিয়ে প্রতিষ্ঠাতা <strong>{siteConfig.ownerName}</strong> যাত্রাবাড়ী, ঢাকা থেকে প্রতিষ্ঠা করেন <strong>বাঙালী ফুড</strong>। আমাদের মূল লক্ষ্য ছিল একটাই — কোনো প্রকার ফিডিং চিনি, প্রসেসিং বা কেমিক্যাল ছাড়া একদম মৌয়ালদের সংগৃহীত কাঁচা ও চাকের প্রাকৃতিক মধু সরাসরি গ্রাহকের খাবার টেবিলে পৌঁছে দেওয়া।
            </p>
            <p className="bg-[#E6F0D5]/50 p-4 rounded-xl border-l-4 border-[#164B35] text-neutral-800 italic">
              "আমরা এমন খাবার সরবরাহ করতে চাই যা আমরা আমাদের নিজেদের পরিবার ও সন্তানদের নিঃসন্দেহে খাওয়াতে পারি।"
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-neutral-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A63C]/10 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-bold text-[#164B35] mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-[#F28C28]" />
                বাঙালী ফুডের মূল স্তম্ভসমূহ
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F0D5] text-[#164B35] flex items-center justify-center shrink-0 font-bold">
                    ১
                  </div>
                  <div>
                    <h4 className="font-bold text-[#252A25] text-base mb-1">সরাসরি উৎস থেকে সংগ্রহ</h4>
                    <p className="text-xs sm:text-sm text-neutral-600">
                      সুন্দরবনের গহীন বন, শরীয়তপুরের কালোজিরা মাঠ ও উত্তরাঞ্চলের লিচু বাগান থেকে বিশ্বস্ত মৌয়ালদের সহায়তায় মধু সংগ্রহ করা হয়।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F0D5] text-[#164B35] flex items-center justify-center shrink-0 font-bold">
                    ২
                  </div>
                  <div>
                    <h4 className="font-bold text-[#252A25] text-base mb-1">কোনো কেমিক্যাল বা হিটিং নয়</h4>
                    <p className="text-xs sm:text-sm text-neutral-600">
                      মধুর প্রাকৃতিক এনজাইম, পোলেন এবং পুষ্টিগুণ বজায় রাখতে আমরা কোনো প্রকার উচ্চ তাপে ফুটানো বা রাসায়নিক প্রক্রিয়াজাত করি না (Raw Honey)।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F0D5] text-[#164B35] flex items-center justify-center shrink-0 font-bold">
                    ৩
                  </div>
                  <div>
                    <h4 className="font-bold text-[#252A25] text-base mb-1">গ্রাহকের পূর্ণ অধিকার ও নিরাপত্তা</h4>
                    <p className="text-xs sm:text-sm text-neutral-600">
                      কুরিয়ারে পণ্য হাতে পেয়ে দেখে নেওয়ার পূর্ণ সুযোগ এবং ১০০% সন্তুষ্টি গ্যারান্টি।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder & Office Details */}
        <div className="bg-[#164B35] text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 mx-auto md:mx-0 text-[#D4A63C]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-1">উদ্যোক্তা ও প্রতিষ্ঠাতা</h3>
              <p className="text-[#E6F0D5] text-sm font-medium">{siteConfig.ownerName}</p>
              <p className="text-xs text-white/70 mt-1">বাঙালী ফুড পরিবার</p>
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 mx-auto md:mx-0 text-[#D4A63C]">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-1">অফিস ও বিতরণ কেন্দ্র</h3>
              <p className="text-[#E6F0D5] text-sm">{siteConfig.address}</p>
              <p className="text-xs text-white/70 mt-1">সমগ্র বাংলাদেশে হোম ডেলিভারি</p>
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 mx-auto md:mx-0 text-[#D4A63C]">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-1">সরাসরি যোগাযোগ</h3>
              <p className="text-[#E6F0D5] text-sm font-bold">{siteConfig.phoneNumber}</p>
              <p className="text-xs text-white/70 mt-1">সকাল ৯টা হতে রাত ১১টা পর্যন্ত</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-white rounded-3xl p-8 sm:p-12 border border-neutral-100 shadow-sm max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#164B35] mb-4">
            আজই পরখ করুন খাঁটি মধুর আসল স্বাদ
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            আমাদের সংগ্রহে থাকা চাকের মধু, কালোজিরা ফুলের মধু কিংবা সুন্দরবনের খাঁটি মধু অর্ডার করতে আমাদের প্রোডাক্ট ক্যাটালগ দেখুন।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate({ type: 'products' })}
              className="px-8 py-3.5 rounded-xl bg-[#F28C28] hover:bg-[#d97718] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>পণ্যসমূহ দেখুন</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate({ type: 'contact' })}
              className="px-8 py-3.5 rounded-xl bg-[#164B35] hover:bg-[#103827] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              যোগাযোগ করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
