import React from "react";
import { CheckCircle2, ShieldCheck, HeartHandshake, PhoneCall, Truck, Sparkles } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const trustItems = [
    {
      id: "01",
      title: "যত্নসহকারে নির্বাচিত পণ্য",
      description: "প্রাকৃতিক মৌচাক ও ফুলের ক্ষেত্র থেকে সরাসরি বিশ্বস্ত উপায়ে সংগৃহীত সম্পূর্ণ খাঁটি মধু।",
      icon: ShieldCheck,
      iconColor: "text-[#164B35]",
      bgColor: "bg-[#E6F0D5]",
    },
    {
      id: "02",
      title: "পণ্যের বিস্তারিত তথ্য",
      description: "কোনো অতিরঞ্জিত দাবি ছাড়াই প্রতিটি মধুর উৎস, বৈশিষ্ট্য ও ব্যবহারবিধি স্পষ্টভাবে তুলে ধরা হয়।",
      icon: CheckCircle2,
      iconColor: "text-[#D4A63C]",
      bgColor: "bg-[#FFF9ED] border border-[#D4A63C]/30",
    },
    {
      id: "03",
      title: "সহজ অর্ডার ব্যবস্থা",
      description: "ওয়েবসাইটের কার্ট অথবা সরাসরি ১-ক্লিক WhatsApp-এ আপনার পছন্দমতো প্যাক সহজে অর্ডার করুন।",
      icon: Sparkles,
      iconColor: "text-[#F28C28]",
      bgColor: "bg-[#FFF2E5]",
    },
    {
      id: "04",
      title: "গ্রাহকবান্ধব যোগাযোগ",
      description: "অর্ডার সংক্রান্ত যেকোনো প্রশ্ন বা সহযোগিতায় সরাসরি ফোন বা WhatsApp-এ আন্তরিক সাপোর্ট।",
      icon: PhoneCall,
      iconColor: "text-[#164B35]",
      bgColor: "bg-[#E6F0D5]",
    },
    {
      id: "05",
      title: "পরিষ্কার ডেলিভারি ও পেমেন্ট নীতি",
      description: "নিরাপদ প্যাকেজিং, স্পষ্ট ডেলিভারি চার্জ এবং পণ্য হাতে পেয়ে মূল্য পরিশোধের নির্ভরযোগ্য ক্যাশ অন ডেলিভারি।",
      icon: Truck,
      iconColor: "text-[#D4A63C]",
      bgColor: "bg-[#FFF9ED] border border-[#D4A63C]/30",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FFF9ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-bengali text-xs font-semibold text-[#D4A63C] uppercase tracking-wider block mb-1">
            বিশ্বাসের অঙ্গীকার
          </span>
          <h2 className="font-bengali bengali-section-heading text-2xl sm:text-3xl font-bold text-[#164B35] mb-3 leading-[1.35]">
            কেন বাঙালী ফুড বেছে নেবেন?
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            খাঁটি ও প্রাকৃতিক খাদ্যের নির্ভরযোগ্য মান ধরে রাখাই আমাদের মূল অগ্রাধিকার।
          </p>
        </div>

        {/* 5 Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white p-5 rounded-2xl border border-[#164B35]/15 shadow-2xs hover:shadow-md hover:border-[#164B35]/35 transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bgColor}`}
                  >
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>

                  <span className="font-bengali text-[11px] font-semibold text-[#D4A63C] block mb-1">
                    পয়েন্ট {item.id}
                  </span>

                  <h3 className="font-bengali bengali-card-title text-sm sm:text-base font-semibold text-[#164B35] mb-2 leading-[1.4]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
