import { ArrowRight, ChevronRight, MapPin, Phone, Mail, Facebook, Youtube, Instagram, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full mt-12 lg:mt-24 flex flex-col relative">
      
      {/* Premium Floating CTA Section (Responsive Overlap) */}
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-20 -mb-24 lg:-mb-16">
        <div className="bg-gradient-to-br from-[#044c3c] to-[#022c24] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl shadow-[#044c3c]/20 border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>
          
          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
              Ready for Expert Urological Care?
            </h2>
            <p className="text-emerald-100/90 text-sm sm:text-base">
              Take the first step towards better health. Book your consultation today and get the premium healthcare you deserve.
            </p>
          </div>
          
          <div className="relative z-10 flex-shrink-0">
            <Link 
              to="/contact" 
              className="bg-amber-400 hover:bg-amber-500 hover:-translate-y-1 transition-all duration-300 text-[#044c3c] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_10px_20px_-10px_rgba(251,191,36,0.5)] w-full sm:w-auto"
            >
              <Stethoscope className="w-5 h-5" />
              <span>Book Appointment</span>
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#011e18] pt-36 lg:pt-32 pb-16 relative overflow-hidden">
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Column 1: Brand & Bio (Spans 4 cols on large screens) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="w-56 inline-block bg-white/5 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                <img src="/Azfar.png" alt="Dr Azfar Logo" className="w-full h-auto" />
              </div>
              <p className="text-emerald-100/70 text-sm leading-relaxed font-sans pr-4">
                প্রফেসর ডা. আজফার উদ্দীন শেখ বাংলাদেশের একজন স্বনামধন্য ইউরোলজিস্ট, এন্ড্রোলজিস্ট এবং মাইক্রোসার্জন। দীর্ঘদিনের অভিজ্ঞতায় তিনি হাজারো রোগীকে সুস্থ জীবনে ফিরিয়ে এনেছেন।
              </p>
              
              {/* Social Links inside brand column */}
              <div className="flex items-center gap-3 mt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-amber-400 hover:text-[#044c3c] text-emerald-100 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.5)] hover:-translate-y-1">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-amber-400 hover:text-[#044c3c] text-emerald-100 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.5)] hover:-translate-y-1">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-amber-400 hover:text-[#044c3c] text-emerald-100 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.5)] hover:-translate-y-1">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links (Spans 2 cols) */}
            <div className="lg:col-span-2 lg:ml-8">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                Explore
              </h4>
              <ul className="space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Profile', path: '/about' },
                  { name: 'Video Library', path: '/blog' },
                  { name: 'Patient Stories', path: '/blog' },
                  { name: 'Contact Us', path: '/contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-emerald-100/70 hover:text-amber-400 transition-colors flex items-center gap-2 text-sm group">
                      <ChevronRight className="w-4 h-4 text-emerald-500/50 group-hover:text-amber-400 transition-colors" strokeWidth={2.5} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info (Spans 3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                Get In Touch
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400 group-hover:text-[#044c3c] text-emerald-400 transition-colors mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-emerald-100/70 text-sm leading-relaxed block pr-4">Anwer Khan Modern Medical College & Hospital, Dhanmondi, Dhaka</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400 group-hover:text-[#044c3c] text-emerald-400 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href="tel:01754995671" className="text-emerald-100/70 hover:text-amber-400 text-sm transition-colors">01754 995 671</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400 group-hover:text-[#044c3c] text-emerald-400 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:appointment@drazfarshaikh.com" className="text-emerald-100/70 hover:text-amber-400 text-sm transition-colors break-all">appointment@drazfarshaikh.com</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Chamber Hours (Spans 3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                Chamber Hours
              </h4>
              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-3 pb-3 border-b border-white/10">
                  <span className="text-emerald-100/70 text-sm font-sans">শনি - বৃহস্পতি</span>
                  <span className="text-white font-bold text-sm bg-white/10 px-3 py-1 rounded-full">৬:০০ - ১০:০০ PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-100/70 text-sm font-sans">শুক্রবার</span>
                  <span className="text-rose-400 font-bold text-sm bg-rose-400/10 px-3 py-1 rounded-full">বন্ধ</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-[#001410] py-6 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-emerald-100/50 text-xs sm:text-sm text-center md:text-left font-medium">
            &copy; {new Date().getFullYear()} Prof. Dr. Azfar Uddin Shaikh. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-emerald-100/50 text-xs sm:text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <span className="text-emerald-100/20">|</span>
            <span className="flex items-center gap-1">
              Developed by <a href="#" className="text-emerald-400 hover:text-amber-400 font-bold transition-colors">Renssoft Solutions LTD</a>
            </span>
          </div>
        </div>
      </div>
      
    </footer>
  );
}
