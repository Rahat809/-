import React from "react";
import { ShieldCheck, Trees, HeartHandshake } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: "01",
      title: "১০০% অর্গানিক ও নিরাপদ",
      description: "কোনো প্রকার ভেজাল বা রাসায়নিক উপাদান ছাড়াই সংগৃহীত।",
      icon: ShieldCheck,
      iconBg: "bg-emerald-950/90 text-emerald-400 border border-emerald-800/50",
    },
    {
      id: "02",
      title: "প্রাকৃতিক চাকের মধু",
      description: "সরাসরি বনের বা প্রাকৃতিক চাক থেকে স্বাস্থ্যসম্মত উপায়ে সংগৃহীত।",
      icon: Trees,
      iconBg: "bg-amber-950/90 text-amber-400 border border-amber-800/50",
    },
    {
      id: "03",
      title: "ন্যাচারাল খাদ্যের নিশ্চয়তা",
      description: "আপনার পরিবারকে দিচ্ছি একদম খাঁটি ও স্বাস্থ্যকর খাবারের আশ্বাস।",
      icon: HeartHandshake,
      iconBg: "bg-emerald-950/90 text-emerald-400 border border-emerald-800/50",
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-[#0a0d0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-semibold text-emerald-400 uppercase tracking-wider">
            বিশ্বাসের প্রতীক
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 mb-3">
            কেন বাঙালী ফুড?
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            খাঁটি খাবারের বিশ্বাস থেকেই আমাদের পথচলা।
          </p>
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group p-8 rounded-2xl bg-[#111814] border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-[#15201a] shadow-lg hover:shadow-emerald-950/40 transition-all duration-200 flex flex-col items-start"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.iconBg} transition-transform group-hover:scale-105 shadow-inner`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <span className="text-xs font-semibold text-emerald-400 mb-2">
                  বৈশিষ্ট্য {feature.id}
                </span>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
