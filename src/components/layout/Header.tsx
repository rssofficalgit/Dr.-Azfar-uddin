import { useState } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm py-4 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" onClick={closeMobileMenu}>
            <img src="/favicon.png" alt="Dr Azfar Uddin Shaikh Icon" className="md:hidden h-12 w-auto object-contain" />
            <img src="/Azfar.png" alt="Dr Azfar Uddin Shaikh Urology Logo" className="hidden md:block h-16 md:h-20 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          <Link to="/" className={`font-medium px-5 py-2 rounded-md transition-colors ${currentPath === '/' ? 'text-amber-500 font-bold' : 'text-slate-800 hover:text-[#044c3c]'}`}>
            Home
          </Link>
          <Link to="/about" className={`font-medium px-5 py-2 rounded-md transition-colors ${currentPath === '/about' ? 'text-amber-500 font-bold' : 'text-slate-800 hover:text-[#044c3c]'}`}>
            About
          </Link>
          <Link to="/blog" className={`font-medium px-5 py-2 rounded-md transition-colors ${currentPath === '/blog' ? 'text-amber-500 font-bold' : 'text-slate-800 hover:text-[#044c3c]'}`}>
            Blog & Social
          </Link>
          <Link to="/contact" className={`font-medium px-5 py-2 rounded-md transition-colors ${currentPath === '/contact' ? 'text-amber-500 font-bold' : 'text-slate-800 hover:text-[#044c3c]'}`}>
            Contact Us
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <button className="flex items-center space-x-2 border-2 border-[#044c3c] text-[#044c3c] hover:bg-[#044c3c] hover:text-white transition-colors font-bold px-6 py-2.5 rounded-md">
            <Calendar className="w-5 h-5" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="p-2 text-slate-800 hover:text-[#044c3c] transition-colors">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col space-y-4 z-50">
          <Link 
            to="/" 
            onClick={closeMobileMenu}
            className={`font-medium text-lg ${currentPath === '/' ? 'text-amber-500 font-bold' : 'text-slate-800'}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={closeMobileMenu}
            className={`font-medium text-lg ${currentPath === '/about' ? 'text-amber-500 font-bold' : 'text-slate-800'}`}
          >
            About
          </Link>
          <Link 
            to="/blog" 
            onClick={closeMobileMenu}
            className={`font-medium text-lg ${currentPath === '/blog' ? 'text-amber-500 font-bold' : 'text-slate-800'}`}
          >
            Blog & Social
          </Link>
          <Link 
            to="/contact" 
            onClick={closeMobileMenu}
            className={`font-medium text-lg ${currentPath === '/contact' ? 'text-amber-500 font-bold' : 'text-slate-800'}`}
          >
            Contact Us
          </Link>
          <hr className="border-slate-100 my-2" />
          <button className="w-full flex items-center justify-center space-x-2 bg-[#044c3c] text-white transition-colors font-bold px-6 py-3 rounded-md">
            <Calendar className="w-5 h-5" />
            <span>Book Appointment</span>
          </button>
        </div>
      )}
    </header>
  );
}
