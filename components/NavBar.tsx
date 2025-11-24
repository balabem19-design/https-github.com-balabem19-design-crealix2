import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/#servicos' },
    { name: 'Secretária Smart', path: '/secretaria-smart' },
    { name: 'Cases', path: '/cases' },
    { name: 'Contato', path: 'https://wa.me/5548991849190', external: true },
  ];

  // Logic to determine if nav text should be dark (light background pages)
  const isLightPage = location.pathname === '/cases';
  const shouldUseDarkText = isLightPage && !isScrolled;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-[#3CEFFF]/10 py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group transform hover:scale-105 transition-transform duration-300">
           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3CEFFF] to-[#A16EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative font-bold text-black text-xl">C</span>
           </div>
           <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${shouldUseDarkText ? 'text-black' : 'text-white'}`}>
             CREALIX
           </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const baseColor = shouldUseDarkText ? 'text-gray-800' : 'text-gray-300';
            const activeColor = isActive ? 'text-[#3CEFFF]' : baseColor;

            return link.external ? (
              <a 
                key={link.name} 
                href={link.path}
                target="_blank"
                rel="noreferrer"
                className={`text-sm font-medium transition-all duration-300 hover:text-[#3CEFFF] hover:-translate-y-0.5 relative group ${baseColor}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3CEFFF] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#3CEFFF] hover:-translate-y-0.5 relative group ${activeColor}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#3CEFFF] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            )
          })}
          <a 
            href="https://wa.me/5548991849190"
            className="btn-shine px-6 py-2 bg-[#3CEFFF] hover:bg-[#A16EFF] text-black font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(60,239,255,0.4)] hover:shadow-[0_0_20px_rgba(161,110,255,0.6)] hover:scale-105"
          >
            Falar com a Crealix
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-transform duration-300 active:scale-90 ${shouldUseDarkText ? 'text-black' : 'text-white'}`}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0C0C0D]/95 backdrop-blur-xl border-b border-gray-800 p-6 flex flex-col gap-6 md:hidden min-h-screen">
          {navLinks.map((link, idx) => (
             link.external ? (
               <a 
                 key={link.name} 
                 href={link.path}
                 className="text-gray-300 text-2xl font-bold hover:text-[#3CEFFF] transition-all transform translate-y-4 opacity-0 animate-[float_0.5s_ease-out_forwards]"
                 style={{ animationDelay: `${idx * 100}ms`, animationName: 'slideUpFade' }}
                 onClick={() => setMobileOpen(false)}
               >
                 {link.name}
               </a>
             ) : (
               <Link 
                 key={link.name} 
                 to={link.path}
                 className={`text-2xl font-bold hover:text-[#3CEFFF] transition-all transform translate-y-4 opacity-0 ${location.pathname === link.path ? 'text-[#3CEFFF]' : 'text-gray-300'}`}
                 style={{ 
                   animation: `slideUpFade 0.5s ease-out forwards ${idx * 100}ms` 
                 }}
                 onClick={() => setMobileOpen(false)}
               >
                 {link.name}
               </Link>
             )
          ))}
          
          <style>{`
            @keyframes slideUpFade {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )}
    </nav>
  );
};