import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { deliveryConfig } from "../../config/deliveryConfig";
import { formatBDT } from "../../utils/currency";

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "কীভাবে অর্ডার করব?",
      answer:
        "আপনি ওয়েবসাইট থেকে পছন্দের মধু ও প্যাকেজের ওজন নির্বাচন করে সরাসরি 'কার্ট-এ যোগ' করে চেকআউট সম্পন্ন করতে পারেন। এছাড়া যেকোনো পণ্য থেকে সরাসরি 'WhatsApp-এ অর্ডার করুন' বাটনে ক্লিক করে prefilled মেসেজ পাঠিয়ে মুহূর্তেই অর্ডার নিশ্চিত করতে পারেন।",
    },
    {
      question: "কোন কোন ধরনের মধু পাওয়া যায়?",
      answer:
        "বাঙালী ফুডে বর্তমানে ৫টি প্রধান ক্যাটাগরির মধু পাওয়া যায়: ১) প্রাকৃতিক চাকের মধু, ২) কালোজিরা মধু, ৩) বুনো পাহাড়ি মধু, ৪) সরিষা ফুলের মধু এবং ৫) সুগন্ধি লিচু ফুলের মধু।",
    },
    {
      question: "কী কী ওজনের প্যাকেজ পাওয়া যায়?",
      answer:
        "আমাদের প্রতিটি মধু ২৫০ গ্রাম, ৫০০ গ্রাম এবং ১ কেজির ফুড-গ্রেড বায়ুরোধী কাঁচের বয়ামে প্যাকেজ আকারে পাওয়া যায়। আপনি আপনার প্রয়োজন অনুযায়ী প্যাকেজ সাইজ নির্বাচন করতে পারেন।",
    },
    {
      question: "ঢাকার বাইরে কি ডেলিভারি হয়?",
      answer:
        "হ্যাঁ! সমগ্র বাংলাদেশে জেলা ও উপজেলা পর্যায়ে বিশ্বস্ত কুরিয়ার সার্ভিসের মাধ্যমে হোম ডেলিভারি ও পার্সেল পাঠানো হয়। কাঁচের বয়াম শতভাগ নিরাপদে পৌঁছানোর জন্য বাবল র‍্যাপ ও বিশেষ কার্টন প্যাকেজিং ব্যবহার করা হয়।",
    },
    {
      question: "ডেলিভারি চার্জ কত?",
      answer: `ঢাকা সিটির ভেতরে ডেলিভারি চার্জ ${formatBDT(deliveryConfig.insideDhakaCharge)} এবং ঢাকা সিটির বাইরে সারাদেশে ${formatBDT(deliveryConfig.outsideDhakaCharge)}। তবে মোট অর্ডারের মূল্য ${formatBDT(deliveryConfig.freeDeliveryThreshold)} বা তার বেশি হলে সম্পূর্ণ ফ্রি ডেলিভারি প্রদান করা হয়।`,
    },
    {
      question: "কীভাবে পেমেন্ট করতে পারব?",
      answer:
        "আমাদের সবচেয়ে জনপ্রিয় ও বিশ্বস্ত পেমেন্ট মেথড হলো ক্যাশ অন ডেলিভারি (Cash on Delivery)—অর্থাৎ ডেলিভারিম্যানের কাছ থেকে পার্সেল হাতে পেয়ে দেখে মূল্য পরিশোধ করতে পারবেন।",
    },
    {
      question: "অর্ডার সম্পর্কে কীভাবে যোগাযোগ করব?",
      answer: `অর্ডার সংক্রান্ত যেকোনো তথ্য, পরামর্শ বা দ্রুত সহযোগিতার জন্য আমাদের WhatsApp নম্বরে (${siteConfig.whatsappNumber}) মেসেজ দিতে পারেন অথবা সরাসরি ফোন করতে পারেন। এছাড়া আমাদের ফেসবুক পেজেও যোগাযোগ করা যায়।`,
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FFF9ED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#164B35] uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4A63C]" />
            <span className="font-bengali">সচরাচর জিজ্ঞাসা</span>
          </div>
          <h2 className="font-bengali bengali-section-heading text-2xl sm:text-3xl font-bold text-[#164B35] mb-2 leading-[1.35]">
            সাধারণ প্রশ্নোত্তর (FAQ)
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            মধু অর্ডার, ডেলিভারি ও প্যাকেজিং সম্পর্কিত গুরুত্বপূর্ণ তথ্যাবলী।
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#164B35]/15 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base text-[#164B35] hover:text-[#F28C28] transition-colors cursor-pointer"
                >
                  <span className="font-bengali font-semibold leading-[1.4]">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4A63C] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#252A25]/85 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
