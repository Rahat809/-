import React, { useState } from 'react';
import { 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import { deliveryConfig } from '../config/deliveryConfig';
import { siteConfig } from '../config/siteConfig';
import { PageView } from '../types';

type PolicyTab = 'delivery' | 'returns' | 'privacy' | 'terms';

interface PolicyPageProps {
  initialTab?: PolicyTab;
  navigate?: (view: PageView) => void;
}

export const PolicyPage: React.FC<PolicyPageProps> = ({ initialTab = 'delivery' }) => {
  const [activeTab, setActiveTab] = useState<PolicyTab>(initialTab);

  return (
    <div className="min-h-screen py-10 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#164B35] mb-3">
            নীতিমালা ও গ্রাহক সেবা
          </h1>
          <p className="text-sm sm:text-base text-neutral-600">
            বাঙালী ফুড-এর ডেলিভারি, রিটার্ন ও স্বচ্ছ নিয়মাবলী সম্পর্কে বিস্তারিত জানুন।
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 border-b border-neutral-200 pb-4">
          <button
            onClick={() => setActiveTab('delivery')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'delivery'
                ? 'bg-[#164B35] text-white shadow-sm'
                : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            <Truck className="w-4 h-4 text-[#F28C28]" />
            <span>ডেলিভারি পলিসি</span>
          </button>

          <button
            onClick={() => setActiveTab('returns')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'returns'
                ? 'bg-[#164B35] text-white shadow-sm'
                : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            <RotateCcw className="w-4 h-4 text-[#F28C28]" />
            <span>রিটার্ন ও রিফান্ড নীতি</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'privacy'
                ? 'bg-[#164B35] text-white shadow-sm'
                : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#F28C28]" />
            <span>গোপনীয়তা নীতি (Privacy Policy)</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'terms'
                ? 'bg-[#164B35] text-white shadow-sm'
                : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            <FileText className="w-4 h-4 text-[#F28C28]" />
            <span>শর্তাবলী (Terms & Conditions)</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-neutral-100">
          {/* 1. DELIVERY POLICY */}
          {activeTab === 'delivery' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#164B35] mb-2 flex items-center gap-3">
                  <Truck className="w-6 h-6 text-[#F28C28]" />
                  <span>ডেলিভারি সংক্রান্ত নিয়মাবলী ও চার্জ</span>
                </h2>
                <p className="text-neutral-600 text-sm">
                  আমরা বিশ্বস্ত কুরিয়ার সার্ভিসের মাধ্যমে সারা বাংলাদেশে নিরাপদে পণ্য পৌঁছে দিয়ে থাকি।
                </p>
              </div>

              {/* Delivery Fee Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#E6F0D5]/50 border border-[#E6F0D5]">
                  <span className="text-xs font-bold text-[#164B35] uppercase tracking-wider block mb-1">
                    ঢাকা সিটির ভিতরে
                  </span>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-extrabold text-[#164B35]">৳{deliveryConfig.insideDhakaCharge}</span>
                    <span className="text-xs text-neutral-600">ডেলিভারি চার্জ</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-700">
                    <Clock className="w-3.5 h-3.5 text-[#F28C28]" />
                    <span>{deliveryConfig.estimatedDeliveryInsideDhaka} দিনের মধ্যে হোম ডেলিভারি</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#FFF9ED] border border-[#D4A63C]/30">
                  <span className="text-xs font-bold text-[#164B35] uppercase tracking-wider block mb-1">
                    ঢাকা সিটির বাইরে (সমগ্র বাংলাদেশ)
                  </span>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-extrabold text-[#164B35]">৳{deliveryConfig.outsideDhakaCharge}</span>
                    <span className="text-xs text-neutral-600">ডেলিভারি চার্জ</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-700">
                    <Clock className="w-3.5 h-3.5 text-[#F28C28]" />
                    <span>{deliveryConfig.estimatedDeliveryOutsideDhaka} দিনের মধ্যে হোম/কুরিয়ার ডেলিভারি</span>
                  </div>
                </div>
              </div>

              {/* Free Delivery Condition */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-amber-900">
                  <strong className="font-bold">ফ্রি ডেলিভারি অফার: </strong>
                  যেকোনো অর্ডারের মোট পণ্যের মূল্য <span className="font-bold text-[#164B35]">৳{deliveryConfig.freeDeliveryThreshold}</span> বা তার বেশি হলে সম্পূর্ণ বিনামূল্যে সারা বাংলাদেশে ডেলিভারি প্রদান করা হয়।
                </div>
              </div>

              {/* Step details */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-[#164B35]">ডেলিভারির সাধারণ শর্তাবলী:</h3>
                <ul className="space-y-3 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28] mt-2 shrink-0"></span>
                    <span>অর্ডার কনফার্ম করার পর সর্বোচ্চ ২৪ ঘণ্টার মধ্যে প্যাকেজিং সম্পন্ন করে কুরিয়ারে হস্তান্তর করা হয়।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28] mt-2 shrink-0"></span>
                    <span>কুরিয়ার ডেলিভারিম্যান পৌঁছানোর পূর্বে আপনাকে ফোনে যোগাযোগ করবে। অনুগ্রহ করে সচল মোবাইল নম্বর প্রদান করবেন।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28] mt-2 shrink-0"></span>
                    <span>ডেলিভারিম্যানের সামনে পার্সেলটি চেক করে নেওয়ার সুযোগ রয়েছে। কোনো সমস্যা পরিলক্ষিত হলে ডেলিভারিম্যান থাকাকালীন আমাদের হেল্পলাইনে কল করুন।</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* 2. RETURN & REFUND POLICY */}
          {activeTab === 'returns' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#164B35] mb-2 flex items-center gap-3">
                  <RotateCcw className="w-6 h-6 text-[#F28C28]" />
                  <span>রিটার্ন ও রিফান্ড নীতি</span>
                </h2>
                <p className="text-neutral-600 text-sm">
                  গ্রাহক সন্তুষ্টিই বাঙালী ফুড-এর মূল শক্তি। শতভাগ খাঁটি পণ্যের নিশ্চয়তা এবং ঝামেলাহীন রিপ্লেসমেন্ট পলিসি।
                </p>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <h4 className="font-bold text-emerald-900 mb-1">পণ্য গ্রহণের সময় চেক করার অধিকার</h4>
                  <p className="text-xs text-emerald-800">
                    আমাদের কুরিয়ার ডেলিভারিম্যান থেকে পার্সেল গ্রহণের সময় আপনি বোতল বা বয়াম অক্ষত আছে কি না এবং খাঁটি মধুর সিল ঠিক আছে কি না নিশ্চিত হয়ে নিতে পারবেন।
                  </p>
                </div>

                <h3 className="font-bold text-[#164B35] text-base mt-6">কোন কোন ক্ষেত্রে রিটার্ন বা পরিবর্তন প্রযোজ্য:</h3>
                <ul className="space-y-2.5 list-disc pl-5 text-neutral-600">
                  <li>যদি ডেলিভারি চলাকালীন বোতল বা বয়াম ভেঙে বা ফেটে যায় অথবা মধু চুইয়ে পড়ে।</li>
                  <li>যদি ভুল ওজনের বা অন্য ভ্যারিয়েন্টের মধু ভুলবশত সরবরাহ করা হয়ে থাকে।</li>
                  <li>যদি মধুতে কোনো ধরণের অস্বাভাবিক কৃত্রিম সুবাস বা বহির্গত অপদ্রব্য লক্ষ্য করা যায়।</li>
                </ul>

                <h3 className="font-bold text-[#164B35] text-base mt-6">রিটার্ন ও রিফান্ড প্রক্রিয়া:</h3>
                <ol className="space-y-2.5 list-decimal pl-5 text-neutral-600">
                  <li>পণ্য হাতে পাওয়ার ৪৮ ঘণ্টার মধ্যে আমাদের হেল্পলাইন <strong className="text-[#164B35]">{siteConfig.phoneNumber}</strong> অথবা হোয়াটসঅ্যাপে যোগাযোগ করুন।</li>
                  <li>ক্ষতিগ্রস্ত বা ভুল পণ্যের স্পষ্ট ছবি বা আনবক্সিং ভিডিও শেয়ার করুন।</li>
                  <li>যাচাই-বাছাই সাপেক্ষে আমরা ৩-৫ কার্যদিবসের মধ্যে নতুন প্রোডাক্ট পাঠিয়ে দিব অথবা বিকাশ/নগদে ১০০% রিফান্ড প্রদান করব।</li>
                </ol>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>
                    উল্লেখ্য: প্রাকৃতিক মধু শীতকালে কিংবা আর্দ্রতার কারণে জমাট বাঁধতে পারে (ক্রিস্টালাইজেশন), যা সম্পূর্ণ স্বাভাবিক ও প্রাকৃতিক ধর্ম। জমাট বাঁধার কারণে কোনো মধু ভেজাল প্রমাণিত হয় না।
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 3. PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-6 text-sm text-neutral-700 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-[#164B35] mb-2 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#F28C28]" />
                  <span>গ্রাহকের তথ্যের গোপনীয়তা নীতি (Privacy Policy)</span>
                </h2>
                <p className="text-neutral-500 text-xs">সর্বশেষ হালনাগাদ: জানুয়ারি ২০২৫</p>
              </div>

              <p>
                বাঙালী ফুড (<span className="text-[#164B35] font-semibold">{siteConfig.brandNameEnglish}</span>) আপনার ব্যক্তিগত তথ্যের সুরক্ষাকে সর্বোচ্চ অগ্রাধিকার দেয়। আমাদের ওয়েবসাইট ব্যবহার ও পণ্য অর্ডারের সময় আপনি যে তথ্য প্রদান করেন, তা কীভাবে সুরক্ষিত থাকে তা নিম্নে বর্ণিত হলো:
              </p>

              <div>
                <h3 className="font-bold text-[#164B35] text-base mb-2">১. আমরা কী কী তথ্য সংগ্রহ করি?</h3>
                <p className="text-neutral-600">
                  পণ্য ডেলিভারি ও অর্ডার প্রসেসিংয়ের সুবিধার্থে আমরা আপনার নাম, মোবাইল নম্বর, সম্পূর্ণ ডেলিভারি ঠিকানা এবং ক্ষেত্রবিশেষে ইমেইল সংগ্রহ করি। আমরা কখনোই আপনার কোনো ব্যাংক একাউন্ট নম্বর বা পাসওয়ার্ড সংরক্ষণ করি না।
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#164B35] text-base mb-2">২. তথ্যের ব্যবহার</h3>
                <p className="text-neutral-600">
                  আপনার তথ্য শুধুমাত্র পার্সেল বুকিং, কুরিয়ার ডেলিভারি ট্র্যাকিং, অর্ডার কনফার্মেশন কল বা হোয়াটসঅ্যাপ বার্তার জন্য ব্যবহার করা হয়।
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#164B35] text-base mb-2">৩. তথ্যের গোপনীয়তা ও সুরক্ষা</h3>
                <p className="text-neutral-600">
                  আমরা কোনো অবস্থাতেই আপনার ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষ বা স্প্যামারদের কাছে বিক্রয় বা হস্তান্তর করি না। একমাত্র অনুমোদিত কুরিয়ার পার্টনারকে কেবল ডেলিভারির জন্য প্রয়োজনীয় নাম ও ঠিকানা প্রদান করা হয়।
                </p>
              </div>
            </div>
          )}

          {/* 4. TERMS & CONDITIONS */}
          {activeTab === 'terms' && (
            <div className="space-y-6 text-sm text-neutral-700 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-[#164B35] mb-2 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#F28C28]" />
                  <span>ব্যবহারের শর্তাবলী (Terms & Conditions)</span>
                </h2>
                <p className="text-neutral-500 text-xs">বাঙালী ফুড অফিসিয়াল সার্ভিস পলিসি</p>
              </div>

              <div className="space-y-4 text-neutral-600">
                <p>
                  বাঙালী ফুড-এর ওয়েবসাইট ব্রাউজ ও অর্ডার করার মাধ্যমে আপনি নিম্নোক্ত সাধারণ শর্তাবলী মেনে নিচ্ছেন:
                </p>

                <div>
                  <h4 className="font-bold text-[#164B35] mb-1">১. পণ্যের তথ্য ও সঠিকতা</h4>
                  <p>
                    আমরা আমাদের প্রতিটি খাঁটি মধুর বৈশিষ্ট্য, প্যাকেজিং ও মূল্য যথাসম্ভব নির্ভুলভাবে উপস্থাপন করে থাকি। ঋতুভেদে এবং প্রাকৃতিক উৎস ভেদে মধুর রং, ঘনত্ব বা স্বাদে সামান্য স্বাভাবিক তারতম্য হতে পারে।
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#164B35] mb-1">২. অর্ডার এবং মূল্য পরিশোধ</h4>
                  <p>
                    গ্রাহক ক্যাশ অন ডেলিভারি (Cash on Delivery) অথবা বিকাশ/নগদ এর মাধ্যমে পণ্য গ্রহণকালে মূল্য পরিশোধ করতে পারবেন। অপ্রয়োজনে বা মিথ্যা তথ্য দিয়ে ফেক অর্ডার করা আইনত দণ্ডনীয়।
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#164B35] mb-1">৩. স্বত্বাধিকার ও ট্রেডমার্ক</h4>
                  <p>
                    বাঙালী ফুড ব্র্যান্ডের নাম, লোগো এবং ওয়েবসাইটে ব্যবহৃত যাবতীয় ছবি ও কনটেন্ট বাঙালী ফুড-এর নিজস্ব সম্পত্তি। অনুমতি ব্যতিরেকে কোনো বাণিজ্যিক কাজে এর ব্যবহার নিষিদ্ধ।
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#164B35] mb-1">৪. যোগাযোগ</h4>
                  <p>
                    শর্তাবলী সংক্রান্ত যেকোনো প্রশ্নে কল করুন: <span className="font-bold text-[#164B35]">{siteConfig.phoneNumber}</span> অথবা অফিস: {siteConfig.address}।
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
