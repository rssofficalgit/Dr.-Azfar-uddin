import { ArrowRight, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  const credentials = [
    "American Board Certified",
    "Fellow of American College of Surgeons",
    "Advanced Training in USA & Europe",
    "International Conference Speaker"
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left - Image with Frame */}
          <div className="lg:col-span-4 relative flex items-center justify-center min-h-[400px]">
            {/* Background shape behind image */}
            <div className="absolute inset-4 bg-amber-400/20 rounded-[2.5rem] transform -rotate-3 transition-transform duration-500 hover:rotate-0"></div>
            <img 
              src="/about-surgery.jpeg" 
              alt="Prof. Dr. Azfar Uddin Shaikh performing surgery" 
              className="relative z-10 w-full h-[400px] lg:h-full object-cover rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            />
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-8 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-slate-100 animate-bounce-slow">
              <div className="text-4xl font-black text-[#044c3c]">26<span className="text-amber-500">+</span></div>
              <div className="text-xs font-bold text-slate-500 leading-tight tracking-wider uppercase">Years<br/>Experience</div>
            </div>
          </div>

          {/* Middle - Content */}
          <div className="lg:col-span-5 flex flex-col justify-center py-6 lg:px-10 mt-8 lg:mt-0">
            <h4 className="text-amber-500 font-extrabold text-xs sm:text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-0.5 bg-amber-500"></span>
              Meet Our Specialist
            </h4>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#044c3c] mt-5 leading-tight">
              Prof. Dr. Azfar Uddin <br/> Shaikh
            </h2>
            
            <h3 className="text-base sm:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-500 mt-3">
              MBBS, FCPS (Urology), MCh (Urology), FACS (USA)
            </h3>
            
            <div className="w-12 h-1 bg-emerald-100 mt-6 rounded-full"></div>

            <p className="text-slate-600 mt-6 leading-relaxed text-sm sm:text-base">
              Renowned Urologist, Andrologist & Microsurgeon dedicated to providing advanced, ethical and compassionate care for all urological and male fertility concerns. He is the pioneer of comprehensive male infertility treatment in Bangladesh.
            </p>
            
            <Link 
              to="/about"
              className="group mt-10 bg-[#044c3c] hover:bg-[#033b2e] transition-all duration-300 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 w-fit text-sm shadow-[0_8px_20px_rgb(4,76,60,0.2)] hover:shadow-[0_8px_25px_rgb(4,76,60,0.3)] hover:-translate-y-1"
            >
              <span>View Full Profile</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right - Premium Credentials Box */}
          <div className="lg:col-span-3 flex mt-8 lg:mt-0">
            <div className="w-full bg-gradient-to-br from-[#044c3c] to-[#022c22] rounded-[2rem] p-8 lg:p-10 flex flex-col justify-center gap-8 shadow-2xl relative overflow-hidden group">
              {/* Decorative faint icon in background */}
              <Award className="absolute -bottom-10 -right-10 w-64 h-64 text-emerald-900/40 -z-0 group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10">
                <h4 className="text-white text-xl font-extrabold mb-8 flex items-center gap-2">
                  <Award className="w-6 h-6 text-amber-400" />
                  Credentials
                </h4>
                
                <div className="flex flex-col gap-6">
                  {credentials.map((cred, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 bg-emerald-800/50 p-1.5 rounded-full">
                        <ChevronRight className="w-3 h-3 text-amber-400" strokeWidth={4} />
                      </div>
                      <span className="text-emerald-50 font-medium text-sm leading-snug">
                        {cred}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
