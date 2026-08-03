import { ArrowRight, Activity, Microscope, Droplets, Brain, Stethoscope, ShieldPlus, Scissors, Baby, ActivitySquare, User, HeartPulse, Bot } from 'lucide-react';

export function Services() {
  const services = [
    { title: "Andrology", icon: Activity, desc: "Male reproductive health" },
    { title: "Microsurgery", icon: Microscope, desc: "Precision surgical techniques" },
    { title: "Kidney Stone", icon: Droplets, desc: "Advanced removal options" },
    { title: "Neuro-Urology", icon: Brain, desc: "Nervous system urology" },
    { title: "Endourology", icon: Stethoscope, desc: "Minimally invasive care" },
    { title: "Uro Oncology", icon: ShieldPlus, desc: "Urological cancer care" },
    { title: "Reconstructive", icon: Scissors, desc: "Restoring normal function" },
    { title: "Pediatric Urology", icon: Baby, desc: "Specialized care for children" },
    { title: "Male Infertility", icon: ActivitySquare, desc: "Comprehensive solutions" },
    { title: "Female Urology", icon: User, desc: "Specialized female care" },
    { title: "General Urology", icon: HeartPulse, desc: "Complete urological health" },
    { title: "Robotic Surgery", icon: Bot, desc: "Advanced laparoscopy" }
  ];

  return (
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
            Our Expertise
            <span className="w-8 h-0.5 bg-amber-500"></span>
          </h4>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#044c3c] mb-6 leading-tight">
            Comprehensive <br className="hidden sm:block" /> Urology Care
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            Delivering state-of-the-art medical and surgical treatments with precision, compassion, and the highest standard of excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
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
                
                <p className="text-slate-500 text-sm leading-relaxed relative z-10 group-hover:text-slate-700 transition-colors">
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
          <button className="group bg-white border-2 border-[#044c3c] text-[#044c3c] hover:bg-[#044c3c] hover:text-white transition-all duration-300 px-8 py-4 rounded-xl font-bold flex items-center gap-3 text-sm sm:text-base shadow-sm hover:shadow-lg hover:-translate-y-1">
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
