import { useState } from 'react';
import { ArrowRight, Activity, Microscope, Droplets, Brain, Stethoscope, ShieldPlus, Scissors, Baby, ActivitySquare, User, Bot, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

export function Services() {
  const { t, language } = useLanguage();
  
  const services = [
    { title: t.services.items.andrologyTitle, icon: Activity, desc: t.services.items.andrologyDesc, details: t.services.items.andrologyDetails },
    { title: t.services.items.microsurgeryTitle, icon: Microscope, desc: t.services.items.microsurgeryDesc, details: t.services.items.microsurgeryDetails },
    { title: t.services.items.kidneyStoneTitle, icon: Droplets, desc: t.services.items.kidneyStoneDesc, details: t.services.items.kidneyStoneDetails },
    { title: t.services.items.generalUrologyTitle, icon: Stethoscope, desc: t.services.items.generalUrologyDesc, details: t.services.items.generalUrologyDetails },
    { title: t.services.items.maleInfertilityTitle, icon: ActivitySquare, desc: t.services.items.maleInfertilityDesc, details: t.services.items.maleInfertilityDetails },
    { title: t.services.items.neuroUrologyTitle, icon: Brain, desc: t.services.items.neuroUrologyDesc, details: t.services.items.neuroUrologyDetails },
    { title: t.services.items.uroOncologyTitle, icon: ShieldPlus, desc: t.services.items.uroOncologyDesc, details: t.services.items.uroOncologyDetails },
    { title: t.services.items.reconstructiveTitle, icon: Scissors, desc: t.services.items.reconstructiveDesc, details: t.services.items.reconstructiveDetails },
    { title: t.services.items.pediatricTitle, icon: Baby, desc: t.services.items.pediatricDesc, details: t.services.items.pediatricDetails },
    { title: t.services.items.femaleUrologyTitle, icon: User, desc: t.services.items.femaleUrologyDesc, details: t.services.items.femaleUrologyDetails },
    { title: t.services.items.laparoscopyRoboticTitle, icon: Bot, desc: t.services.items.laparoscopyRoboticDesc, details: t.services.items.laparoscopyRoboticDetails }
  ];

  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <>
      <section className="py-16 lg:py-24 relative overflow-hidden bg-white">
        {/* Background Ambience */}
        <div className="absolute inset-0 bg-slate-50/50 -z-20"></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#044c3c]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 -z-10"></div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-amber-500 font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-4 flex items-center justify-center gap-3">
              <span className="w-8 h-0.5 bg-amber-500"></span>
              {t.services.tag}
              <span className="w-8 h-0.5 bg-amber-500"></span>
            </h4>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#044c3c] mb-6 leading-tight">
              {t.services.title}
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  onClick={() => setSelectedService(service)}
                  className="group bg-white rounded-[2rem] p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(4,76,60,0.2)] transition-all duration-500 border border-slate-100 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white hover:to-emerald-50/50 cursor-pointer relative overflow-hidden"
                >
                  {/* Decorative hover shape */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 rounded-bl-full -translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700 ease-out z-0"></div>

                  <div className="w-16 h-16 mb-6 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-[#044c3c] transition-colors duration-500 relative z-10 shadow-sm group-hover:shadow-md">
                    <Icon className="w-8 h-8 text-[#044c3c] group-hover:text-amber-400 transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-[#044c3c] font-extrabold text-lg leading-snug mb-3 relative z-10">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed relative z-10 group-hover:text-slate-700 transition-colors line-clamp-3">
                    {service.desc}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-6 flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-400 group-hover:bg-amber-100 group-hover:text-amber-600 transition-all duration-300 relative z-10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-16 flex justify-center">
            <Link to="/contact" className="group bg-white border-2 border-[#044c3c] text-[#044c3c] hover:bg-[#044c3c] hover:text-white transition-all duration-300 px-8 py-4 rounded-xl font-bold flex items-center gap-3 text-sm sm:text-base shadow-sm hover:shadow-lg hover:-translate-y-1">
              <span>{t.banner.button}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={() => setSelectedService(null)}></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-10 animate-in zoom-in-95 duration-300 scrollbar-hide">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-bl-full -z-10"></div>
            
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-rose-500 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex flex-col items-center text-center mt-4">
              <div className="w-20 h-20 mb-6 rounded-3xl bg-[#044c3c] flex items-center justify-center shadow-lg shadow-[#044c3c]/20 flex-shrink-0">
                <selectedService.icon className="w-10 h-10 text-amber-400" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#044c3c] mb-4">
                {selectedService.title}
              </h3>
              
              <div className="h-1 w-12 bg-amber-500 rounded-full mb-6"></div>
              
              <div className="text-left w-full">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 whitespace-pre-line">
                  {selectedService.details}
                </p>
              </div>
              
              <Link 
                to="/contact" 
                onClick={() => setSelectedService(null)}
                className="w-full bg-[#044c3c] hover:bg-[#033a2d] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg"
              >
                {t.banner.button}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
