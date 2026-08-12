import { Chambers } from '../components/home/Chambers';
import { useLanguage } from '../hooks/useLanguage';

export function ContactPage() {
  const { t } = useLanguage();

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
      <div className="relative z-20 -mt-10 lg:-mt-16 pb-12 lg:pb-20">
        <Chambers />
      </div>

    </div>
  );
}
