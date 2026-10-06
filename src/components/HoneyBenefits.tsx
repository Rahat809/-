import React from "react";
import { ShieldAlert, Zap, HeartPulse, Info } from "lucide-react";

export const HoneyBenefits: React.FC = () => {
  const benefits = [
    {
      title: "রোগ প্রতিরোধ ক্ষমতা বাড়ায়",
      description: "শরীরকে সুস্থ ও চাঙ্গা রাখতে নিয়মিত মধু সেবন অত্যন্ত কার্যকরী।",
      icon: HeartPulse,
      badge: "প্রাকৃতিক সুরক্ষা",
    },
    {
      title: "প্রাকৃতিক শক্তির উৎস",
      description: "প্রতিদিন এক চামচ মধু আপনাকে রাখবে সারাদিন সতেজ।",
      icon: Zap,
      badge: "দৈনন্দিন প্রাণশক্তি",
    },
    {
      title: "ঠান্ডা ও কাশি উপশম",
      description: "সর্দি-কাশি ও গলা ব্যথায় বিশেষ ভূমিকা পালন করে।",
      icon: ShieldAlert,
      badge: "ঘরোয়া যত্ন",
    },
  ];

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-[#0d130f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-semibold text-emerald-400 uppercase tracking-wider">
            পুষ্টিগুণ ও স্বাস্থ্য
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 mb-3">
            খাঁটি মধুর উপকারিতা
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            প্রকৃতির দেওয়া এক অনন্য নিয়ামত যা প্রাচীনকাল থেকেই সুস্থ জীবনের জন্য সমাদৃত।
          </p>
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#121915] p-8 rounded-2xl border border-emerald-500/20 shadow-lg hover:border-emerald-500/50 hover:bg-[#15211b] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-orange-950/80 text-orange-400 border border-orange-800/40 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/60">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explicit Health Disclaimer Placeholder required by user */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl border border-dashed border-emerald-900/80 bg-[#121a16] text-xs text-gray-400 flex items-start gap-3">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-gray-200 block">
              [HEALTH DISCLAIMER PLACEHOLDER]
            </span>
            <p className="text-gray-300">
              মধু একটি ঐতিহ্যবাহী প্রাকৃতিক পুষ্টিকর খাদ্য। কোনো নির্দিষ্ট রোগের
              চিকিৎসার বিকল্প হিসেবে চিকিৎসকের পরামর্শ ব্যতীত বিবেচনা করবেন না।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
