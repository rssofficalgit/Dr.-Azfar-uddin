import { Star, CheckCircle2, Calendar, ArrowRight, Phone, Award } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50/30 py-12 lg:py-20">
      {/* Premium Animated Background Layers */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-3xl animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwNDRjM2MiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom_right,white,transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl mx-auto lg:mx-0">
            {/* Top Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-amber-100 mb-6">
              <span className="flex h-5 w-5 rounded-full bg-amber-100 items-center justify-center">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              </span>
              <span className="text-amber-600 text-xs font-extrabold tracking-widest uppercase">Bangladesh's Leading Urologist</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-6">
              Expert Care for <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#044c3c] to-emerald-500">Urology, Andrology & </span>
              <br className="hidden sm:block" />
              Male Fertility
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Experience world-class urological care equipped with advanced technology, unparalleled compassion, and expertise you can trust for your most sensitive health needs.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10">
              {[
                "American Board Certified Urologist",
                "Advanced Microsurgery & Endourology Specialist",
                "Reconstructive Urology & Male Infertility Expert"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-800 font-semibold text-sm sm:text-base group">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#044c3c] transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-[#044c3c] group-hover:text-white transition-colors" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Premium Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="group flex items-center gap-3 bg-[#044c3c] hover:bg-[#033b2e] transition-all duration-300 text-white px-8 py-4 rounded-xl font-bold text-sm sm:text-base shadow-[0_8px_20px_rgb(4,76,60,0.2)] hover:shadow-[0_8px_25px_rgb(4,76,60,0.3)] hover:-translate-y-0.5">
                <span>Book Appointment</span>
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
              <button className="group flex items-center gap-3 bg-white border-2 border-slate-100 text-slate-700 hover:border-[#044c3c] hover:text-[#044c3c] transition-all duration-300 px-8 py-4 rounded-xl font-bold text-sm sm:text-base shadow-sm hover:shadow-md hover:-translate-y-0.5">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Content - Image & Badges */}
          <div className="relative w-full max-w-[450px] mx-auto lg:max-w-none mt-16 lg:mt-0">
            <div className="relative z-10 pt-10 px-6 sm:px-12 lg:px-16 flex justify-center items-end h-[500px] sm:h-[600px] lg:h-[700px]">
              
              {/* Complex Image Background Frame */}
              <div className="absolute inset-x-2 sm:inset-x-8 bottom-0 top-20 sm:top-28 bg-gradient-to-b from-[#044c3c] to-[#022c22] rounded-[2.5rem] sm:rounded-[3rem] -z-20 shadow-2xl overflow-hidden">
                {/* Inner decorative light */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#044c3c] blur-2xl rounded-full"></div>
              </div>
              
              {/* Decorative Accent Ring */}
              <div className="absolute inset-x-0 sm:inset-x-4 bottom-[-10px] top-16 sm:top-24 border-2 border-amber-400/30 rounded-[2.8rem] sm:rounded-[3.3rem] -z-10 hidden sm:block"></div>
              
              {/* Doctor Image */}
              <img 
                src="/Image-Azfar.png" 
                alt="Dr Azfar Uddin Shaikh" 
                className="relative z-10 w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[500px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] object-contain object-bottom scale-105"
              />

              {/* Floating Contact Card - Left */}
              <div className="absolute -bottom-6 left-0 sm:-left-10 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-amber-100 text-amber-600 p-3 sm:p-3.5 rounded-full flex-shrink-0 shadow-inner">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </div>
                    <span className="text-[10px] font-extrabold text-slate-500 tracking-wider">CONSULT NOW</span>
                  </div>
                  <div className="text-base sm:text-xl font-extrabold text-[#044c3c] leading-tight mt-1">
                    01754 995 671
                  </div>
                </div>
              </div>

              {/* Floating Experience Badge - Right */}
              <div className="absolute top-32 right-0 sm:-right-8 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl flex flex-col items-center gap-1 z-20 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="text-amber-500 mb-1">
                  <Award className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div className="text-2xl font-extrabold text-[#044c3c] leading-none">
                  15+
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider text-center">
                  Years of<br />Excellence
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
