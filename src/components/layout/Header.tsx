import { useState } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

const BDFlag = () => (
  <svg className="w-5 h-3.5 rounded-[2px] shadow-2xs flex-shrink-0" viewBox="0 0 20 14" fill="none">
    <rect width="20" height="14" rx="2" fill="#006A4E" />
    <circle cx="9" cy="7" r="4" fill="#F42A41" />
  </svg>
);

const USFlag = () => (
  <svg className="w-5 h-3.5 rounded-[2px] shadow-2xs flex-shrink-0" viewBox="0 0 20 14" fill="none">
    <rect width="20" height="14" rx="2" fill="white" />
    <path d="M0 0H20V2H0V0ZM0 4H20V6H0V4ZM0 8H20V10H0V8ZM0 12H20V14H0V12Z" fill="#B22234" />
    <rect width="9" height="8" fill="#3C3B6E" />
    <circle cx="2" cy="2" r="0.5" fill="white" />
    <circle cx="7" cy="2" r="0.5" fill="white" />
    <circle cx="4.5" cy="4" r="0.5" fill="white" />
    <circle cx="2" cy="6" r="0.5" fill="white" />
    <circle cx="7" cy="6" r="0.5" fill="white" />
  </svg>
);

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm py-4 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" onClick={closeMobileMenu}>
            <img src="/favicon.png" alt="Prof. Dr. Azfar Uddin Shaikh Icon" className="md:hidden h-12 w-auto object-contain" />
            <img src="/Azfar.png" alt="Prof. Dr. Azfar Uddin Shaikh Urology Logo" className="hidden md:block h-16 md:h-20 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          <Link to="/" className={`font-medium px-4 py-2 rounded-md transition-colors ${currentPath === '/' ? 'text-amber-500 font-bold' : 'text-slate-800 hover:text-[#044c3c]'}`}>
            {t.nav.home}
          </Link>
          <Link to="/about" className={`font-medium px-4 py-2 rounded-md transition-colors ${currentPath === '/about' ? 'text-amber-500 font-bold' : 'text-slate-800 hover:text-[#044c3c]'}`}>
            {t.nav.about}
          </Link>
          <Link to="/blog" className={`font-medium px-4 py-2 rounded-md transition-colors ${currentPath === '/blog' ? 'text-amber-500 font-bold' : 'text-slate-800 hover:text-[#044c3c]'}`}>
            {t.nav.blog}
          </Link>
          <Link to="/contact" className={`font-medium px-4 py-2 rounded-md transition-colors ${currentPath === '/contact' ? 'text-amber-500 font-bold' : 'text-slate-800 hover:text-[#044c3c]'}`}>
            {t.nav.contact}
          </Link>
        </nav>

        {/* Action Button & Language Switcher */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link to="/contact" className="flex items-center space-x-2 border-2 border-[#044c3c] text-[#044c3c] hover:bg-[#044c3c] hover:text-white transition-colors font-bold px-5 py-2 rounded-md text-sm">
            <Calendar className="w-4 h-4" />
            <span>{t.nav.bookAppointment}</span>
          </Link>

          {/* Language Toggle Button with Flags */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all font-bold p-1 rounded-xl text-sm border border-slate-200 shadow-sm cursor-pointer"
            title="Switch Language / ভাষা পরিবর্তন করুন"
          >
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${language === 'bn' ? 'bg-white text-[#044c3c] shadow-sm font-black' : 'text-slate-500 hover:text-slate-700'}`}>
              <BDFlag />
              <span className="font-extrabold text-xs">বাংলা</span>
            </div>
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${language === 'en' ? 'bg-white text-[#044c3c] shadow-sm font-black' : 'text-slate-500 hover:text-slate-700'}`}>
              <USFlag />
              <span className="font-extrabold text-xs">EN</span>
            </div>
          </button>
        </div>

        {/* Mobile Action Controls */}
        <div className="lg:hidden flex items-center space-x-2">
          {/* Mobile Language Button with Flag */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 bg-slate-100 text-slate-800 font-extrabold px-3 py-1.5 rounded-lg text-xs border border-slate-200 shadow-xs cursor-pointer"
          >
            {language === 'en' ? (
              <>
                <BDFlag />
                <span>বাংলা</span>
              </>
            ) : (
              <>
                <USFlag />
                <span>EN</span>
              </>
            )}
          </button>

          {/* Hamburger Menu Button */}
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
            {t.nav.home}
          </Link>
          <Link 
            to="/about" 
            onClick={closeMobileMenu}
            className={`font-medium text-lg ${currentPath === '/about' ? 'text-amber-500 font-bold' : 'text-slate-800'}`}
          >
            {t.nav.about}
          </Link>
          <Link 
            to="/blog" 
            onClick={closeMobileMenu}
            className={`font-medium text-lg ${currentPath === '/blog' ? 'text-amber-500 font-bold' : 'text-slate-800'}`}
          >
            {t.nav.blog}
          </Link>
          <Link 
            to="/contact" 
            onClick={closeMobileMenu}
            className={`font-medium text-lg ${currentPath === '/contact' ? 'text-amber-500 font-bold' : 'text-slate-800'}`}
          >
            {t.nav.contact}
          </Link>
          <hr className="border-slate-100 my-2" />
          <Link 
            to="/contact" 
            onClick={closeMobileMenu}
            className="w-full flex items-center justify-center space-x-2 bg-[#044c3c] text-white transition-colors font-bold px-6 py-3 rounded-md"
          >
            <Calendar className="w-5 h-5" />
            <span>{t.nav.bookAppointment}</span>
          </Link>
        </div>
      )}
    </header>
  );
}
