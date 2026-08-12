import { Phone, Mail, Clock } from 'lucide-react';
import { Chambers } from '../components/home/Chambers';
import { useLanguage } from '../hooks/useLanguage';

export function ContactPage() {
  const { t, language } = useLanguage();

  return (
    <div className="w-full bg-slate-50/50">
      
      {/* Contact Page Hero */}
      <section className="relative bg-[#044c3c] overflow-hidden pt-16 lg:pt-24 pb-16 lg:pb-24">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
          <h4 className="text-amber-400 font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-4">
            {t.contactPage.heroTitle}
          </h4>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            {t.contactPage.heroTitle}
          </h1>
          <p className="text-emerald-100/90 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            {t.contactPage.heroSub}
          </p>
        </div>
      </section>

      {/* Render Chambers Section below Hero */}
      <div className="relative z-20 -mt-10 lg:-mt-16">
        <Chambers />
      </div>

      {/* Main Contact Section */}
      <section className="py-12 lg:py-20 relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#044c3c] mb-4">
              {language === 'bn' ? "সরাসরি যোগাযোগের মাধ্যম" : "Direct Contact Info"}
            </h2>
            <p className="text-slate-500">
              {language === 'bn' ? "যেকোনো তথ্যের জন্য নিচের মাধ্যমগুলোতে সরাসরি যোগাযোগ করতে পারেন।" : "Reach out directly through any of the following channels."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(4,76,60,0.15)] transition-all duration-500">
                <div className="bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  <Phone className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-extrabold text-[#044c3c] text-xl mb-2">{t.contactPage.callUs}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-1">
                  {language === 'bn' ? "রোগী দেখার সময় ফোনে বুকিং খোলা থাকে" : "Available during chamber hours"}
                </p>
                <div className="flex flex-col gap-2 w-full pt-6 border-t border-slate-50">
                  <a href="tel:01754995671" className="text-slate-700 font-bold hover:text-amber-500 transition-colors bg-slate-50 py-2 rounded-xl">01754 995 671</a>
                  <a href="tel:01892760031" className="text-slate-700 font-bold hover:text-amber-500 transition-colors bg-slate-50 py-2 rounded-xl">01892 760 031</a>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(4,76,60,0.15)] transition-all duration-500">
                <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center text-[#044c3c] mb-6 group-hover:bg-[#044c3c] group-hover:text-white transition-colors duration-300">
                  <Mail className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-extrabold text-[#044c3c] text-xl mb-2">{t.contactPage.emailUs}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-1">
                  {language === 'bn' ? "মেডিকেল রিপোর্ট ও তথ্যের জন্য ইমেইল করুন" : "For general inquiries & reports"}
                </p>
                <div className="w-full pt-6 border-t border-slate-50">
                  <a href="mailto:appointment@drazfarshaikh.com" className="text-[#044c3c] font-bold hover:text-emerald-600 transition-colors text-sm sm:text-xs md:text-sm break-all bg-emerald-50 py-2.5 px-3 rounded-xl block">
                    appointment@drazfarshaikh.com
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(4,76,60,0.15)] transition-all duration-500">
                <div className="bg-rose-50 w-16 h-16 rounded-2xl flex items-center justify-center text-rose-500 mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                  <Clock className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-extrabold text-[#044c3c] text-xl mb-2">{t.chambers.visitingHours}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-1">
                  {language === 'bn' ? "শনিবার থেকে বৃহস্পতিবার" : "Saturday to Thursday"}
                </p>
                <div className="w-full pt-6 border-t border-slate-50 flex flex-col gap-2">
                  <div className="bg-rose-50 py-2 rounded-xl text-rose-700 font-bold text-sm">
                    {language === 'bn' ? "সন্ধ্যা ৬:০০ - রাত ১০:০০" : "6:00 PM - 10:00 PM"}
                  </div>
                  <div className="text-rose-500 font-medium text-xs">{t.chambers.closed}</div>
                </div>
              </div>

          </div>
        </div>
      </section>

    </div>
  );
}
