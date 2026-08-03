import { useState, useEffect } from 'react';
import { ArrowUp, Phone } from 'lucide-react';

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  // Show "Back to Top" button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 left-0 w-full px-6 pointer-events-none z-50 flex justify-between items-end">
      
      {/* Left Side: Direct Call Button */}
      <div className={`transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <a 
          href="tel:01731457460" 
          className="pointer-events-auto flex items-center justify-center bg-rose-500 text-white rounded-full shadow-[0_8px_30px_rgba(244,63,94,0.3)] hover:shadow-[0_12px_40px_rgba(244,63,94,0.5)] hover:-translate-y-1 hover:bg-rose-600 transition-all duration-300 group w-12 h-12 md:w-auto md:h-auto md:py-3 md:pl-4 md:pr-5 gap-0 md:gap-3"
        >
          <div className="md:bg-white/20 p-0 md:p-2 rounded-full group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
            <Phone className="w-5 h-5" strokeWidth={2.5} />
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/80 leading-tight">Call Now</span>
            <span className="font-extrabold text-sm leading-tight">01731 457 460</span>
          </div>
        </a>
      </div>

      {/* Right Side: Back to Top Button */}
      <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <button 
          onClick={scrollToTop}
          className="bg-[#044c3c] hover:bg-amber-500 text-white hover:text-[#044c3c] w-12 h-12 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(4,76,60,0.3)] hover:shadow-[0_12px_40px_rgba(244,191,36,0.4)] hover:-translate-y-1 transition-all duration-300 group"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={3} />
        </button>
      </div>

    </div>
  );
}
