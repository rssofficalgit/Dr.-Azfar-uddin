import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function Testimonials() {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      name: language === 'bn' ? "আহমেদ কবীর" : "Ahmed Kabir",
      type: language === 'bn' ? "সম্মানিত রোগী" : "Patient",
      text: language === 'bn'
        ? "প্রফেসর ডা. আজফার অত্যন্ত অভিজ্ঞ এবং দায়িত্বশীল চিকিৎসক। ওনার সফল মাইক্রোসার্জারিতে আমি সম্পূর্ণ সুস্থ। আন্তরিক ধন্যবাদ!"
        : "Prof. Dr. Azfar is incredibly knowledgeable and compassionate. His detailed explanation of my condition and the successful microsurgery completely changed my life. Highly recommended!",
      rating: 5
    },
    {
      name: language === 'bn' ? "সৈয়দ রহমান" : "Syed Rahman",
      type: language === 'bn' ? "সম্মানিত রোগী" : "Patient",
      text: language === 'bn'
        ? "দীঘদিন ধরে কিডনি পাথরের সমস্যায় ভুগছিলাম। স্যারের কাছে চিকিৎসা নেওয়ার পর বিনা কাটে লেজার প্রযুক্তিতে পাথর অপসারণ করা হয়। উনি অনেক যত্নশীল।"
        : "I was suffering from chronic kidney stones for years before I visited him. The treatment was advanced, and the care I received at the clinic was world-class. Thank you so much.",
      rating: 5
    },
    {
      name: language === 'bn' ? "তানভীর হোসেন" : "Tanvir Hossain",
      type: language === 'bn' ? "সম্মানিত রোগী" : "Patient",
      text: language === 'bn'
        ? "বাংলাদেশে এমন আন্তর্জাতিক মানের অভিজ্ঞ সার্জন পাওয়া সত্যিই বিরল। আমার জটিল মেল ইনফার্টিলিটি কেসটি উনি অত্যন্ত পেশাদারিত্ব ও আন্তরিকতার সাথে সমাধান করেছেন।"
        : "Finding a specialist with such an impressive international background in Bangladesh is rare. He handled my complex case with utmost professionalism and care.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#044c3c]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h4 className="text-amber-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
            {t.testimonials.tag}
          </h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#044c3c] mb-6">
            {t.testimonials.title}
          </h2>
          
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-slate-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#044c3c]"></div>
            <div className="h-px w-12 bg-slate-200"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(4,76,60,0.15)] hover:border-emerald-100 z-10"
            >
              {/* Background Quote Watermark */}
              <Quote className="absolute top-8 right-8 w-16 h-16 text-slate-50 group-hover:text-emerald-50 transition-colors duration-500 -z-10 rotate-180" />

              {/* Stars */}
              <div className="flex items-center gap-1.5 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-sm" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 text-base leading-relaxed mb-10 flex-1 relative z-20">
                "{testimonial.text}"
              </p>

              {/* User Info & Avatar */}
              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center text-amber-700 font-extrabold text-xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-extrabold text-[#044c3c] text-base">{testimonial.name}</h4>
                  <span className="text-slate-500 text-sm font-medium">{testimonial.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
