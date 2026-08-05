import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-[#0d0d0d] border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col items-center">
        
        {/* Brand/Logo Area */}
        <div className="mb-10 text-center">
          <a href="#home" className="text-4xl font-serif font-black tracking-tighter text-[#e8c872]">
            SS
          </a>
          <p className="mt-4 text-slate-500 text-xs font-bold tracking-widest uppercase">
            Software Developer & Designer
          </p>
        </div>

        {/* Social Links Area */}
        <div className="flex gap-6 mb-12">
          {[
            { icon: <FaGithub size={18} />, href: "https://github.com/Shravanis30", label: "GitHub" },
            { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/shravanisalunke", label: "LinkedIn" },
            { icon: <FaEnvelope size={18} />, href: "mailto:salunkeshravani561@gmail.com", label: "Email" },
            { icon: <FaInstagram size={18} />, href: "#", label: "Instagram" },
            { icon: <FaTwitter size={18} />, href: "#", label: "Twitter" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="w-12 h-12 rounded-full bg-[#161616] border border-white/5 flex items-center justify-center text-slate-400 hover:text-[#e8c872] hover:border-[#e8c872]/40 hover:-translate-y-1 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright Area */}
        <div className="text-center pt-8 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-[10px] font-bold tracking-[0.2em] uppercase">
            &copy; {currentYear} Shravani Salunke. Built with React & MERN.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-600 text-[10px] font-bold tracking-[0.2em] uppercase hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 text-[10px] font-bold tracking-[0.2em] uppercase hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
