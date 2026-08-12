import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function FAQ() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: language === 'bn' 
        ? "কীভাবে সিরিয়াল বা অ্যাপয়েন্টমেন্ট বুক করব?" 
        : "How do I book an appointment?",
      answer: language === 'bn'
        ? "আমাদের চেম্বার সেকশনে প্রদত্ত যেকোনো ফোন নম্বরে কল করে অথবা ওয়েবসাইটের 'অ্যাপয়েন্টমেন্ট নিন' বাটনে ক্লিক করে সরাসরি সিরিয়াল দিতে পারেন।"
        : "You can book an appointment by calling any of our chamber phone numbers listed in the 'Our Chambers' section, or by clicking the 'Book Appointment' button at the top of the page to schedule online."
    },
    {
      question: language === 'bn'
        ? "প্রথমবার ভিজিটের সময় সাথে কী কী আনা উচিত?"
        : "What should I bring to my first consultation?",
      answer: language === 'bn'
        ? "আপনার পূর্ববর্তী সকল চিকিৎসার ফাইল, প্রেসক্রিপশন, আল্ট্রাসাউন্ড ও রক্ত পরীক্ষা রিপোর্ট এবং নিয়মিত খাওয়া ওষুধের তালিকা সাথে নিয়ে আসবেন।"
        : "Please bring any previous medical records, prescriptions, ultrasound reports, or relevant test results. Also, carry a valid ID and a list of any medications you are currently taking."
    },
    {
      question: language === 'bn'
        ? "আপনারা কি অনলাইন বা টেলিমেডিসিন পরামর্শ দেন?"
        : "Do you offer telemedicine or online consultations?",
      answer: language === 'bn'
        ? "হ্যাঁ, ফলো-আপ ও প্রাথমিক পরামর্শের জন্য অনলাইন ভিডিও কন্সালটেশনের ব্যবস্থা রয়েছে। টেলিমেডিসিন অ্যাপয়েন্টমেন্টের জন্য হেল্পডেস্কে কল করুন।"
        : "Yes, we offer online video consultations for follow-ups and initial assessments. Please contact our front desk to schedule a telemedicine appointment."
    },
    {
      question: language === 'bn'
        ? "পুরুষ বন্ধ্যাত্ব চিকিৎসার সফলতার হার কেমন?"
        : "What are the success rates for male infertility treatments?",
      answer: language === 'bn'
        ? "সফলতার হার রোগের ধরন ও জটিলতার উপর নির্ভর করে। প্রফেসর ডা. আজফার অত্যাধুনিক মাইক্রোসার্জিক্যাল পদ্ধতি ব্যবহার করেন, যা প্রচলিত চিকিৎসার চেয়ে অনেক বেশি সফল।"
        : "Success rates vary depending on the specific condition and underlying causes. Prof. Dr. Azfar uses the most advanced microsurgical techniques, which significantly increase the chances of success compared to traditional methods."
    },
    {
      question: language === 'bn'
        ? "লেজার প্রযুক্তিতে কিডনি পাথর অপসারণ কি যন্ত্রণাদায়ক?"
        : "Is kidney stone laser surgery painful?",
      answer: language === 'bn'
        ? "লেজার লিথোট্রিপসি একটি ব্যথামুক্ত ও আধুনিক চিকিৎসা পদ্ধতি যা এনেস্থেসিয়ার অধীনে করা হয়। অপারেশনের সময় বা পরে কোনো তীব্র যন্ত্রণা হয় না।"
        : "Laser lithotripsy is a minimally invasive procedure performed under anesthesia, meaning you will not feel pain during the surgery. Post-operative discomfort is generally mild and easily managed with prescribed medication."
    }
  ];

  return (
    <section className="py-8 lg:py-10 bg-slate-50/50">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h4 className="text-amber-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
            {t.faq.tag}
          </h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#044c3c] mb-6">
            {t.faq.title}
          </h2>
          
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-slate-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#044c3c]"></div>
            <div className="h-px w-12 bg-slate-200"></div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#044c3c]/30 shadow-md' : 'border-slate-100 shadow-sm hover:border-[#044c3c]/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-bold text-base sm:text-lg pr-4 transition-colors ${
                    isOpen ? 'text-[#044c3c]' : 'text-slate-700'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-[#044c3c] text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
