import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ACHIEVEMENTS', href: '#achievements' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-serif font-black tracking-tight text-[#e8c872] hover:scale-105 transition-transform"
          >
            SS
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-[#e8c872] text-[11px] font-bold tracking-[0.18em] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#e8c872] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#fde047] to-[#e8c872] text-[#1a1a1a] text-xs font-bold tracking-widest hover:shadow-[0_0_15px_rgba(232,200,114,0.5)] transition-all hover:scale-105"
            >
              HIRE ME
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={20} className="text-[#e8c872]" /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all">
          <div className="px-6 py-6 space-y-3 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-300 hover:text-[#e8c872] px-3 py-2 text-xs font-bold tracking-[0.2em] rounded-lg hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center w-full py-3 rounded-full bg-gradient-to-r from-[#fde047] to-[#e8c872] text-[#1a1a1a] text-xs font-bold tracking-widest uppercase shadow-md"
              >
                HIRE ME
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
