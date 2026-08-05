import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaRocket, FaPaperPlane } from 'react-icons/fa';
import shravaniPhoto from '../assets/shravani.jpg';

const Typewriter = ({ words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout);
  }, []);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="text-white font-bold inline-flex items-center">
      {words[index].substring(0, subIndex)}
      <span className={`w-0.5 h-6 bg-[#e8c872] ml-1 ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-background pt-20">
      {/* Abstract dark network background - simple CSS representation */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(232, 200, 114, 0.08) 0%, transparent 50%), radial-gradient(circle at 85% 30%, rgba(232, 200, 114, 0.05) 0%, transparent 50%)' }} />

      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between">

        {/* Left Content Area */}
        <div className="lg:w-[55%] flex flex-col items-start mt-10 lg:mt-0 lg:pr-10 xl:pr-20">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm tracking-[0.2em] uppercase mb-4"
          >
            Hello World, I'm
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-serif font-black leading-[1.05] tracking-tight mb-8"
          >
            <h1 className="text-6xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] text-white">Shravani</h1>
            <h1 className="text-6xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] text-[#e8c872]">Salunke</h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-400 mb-8 flex items-center h-8"
          >
            I'm a&nbsp;<Typewriter words={['Software Developer', 'Freelancer', 'Tech Enthusiast']} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed mb-10"
          >
            Software Developer based in Maharashtra, India.
            <br />
            I strive to translate business requirements into efficient, scalable software solutions.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#fde047] to-[#e8c872] text-[#1a1a1a] text-xs font-bold tracking-widest sm:text-sm hover:shadow-[0_0_20px_rgba(232,200,114,0.4)] transition-all flex items-center gap-2"
            >
              <FaRocket /> VIEW MY WORK
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-transparent border border-white/10 text-slate-300 text-xs font-bold tracking-widest sm:text-sm hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <FaPaperPlane /> LET'S TALK
            </a>

            <a
              href="https://github.com/shravanisalunke"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-transparent border border-white/10 text-slate-300 text-xs font-bold tracking-widest sm:text-sm hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <FaGithub size={16} /> GITHUB
            </a>
          </motion.div>

          {/* Social Icons Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-between w-full lg:w-auto lg:gap-20"
          >
            <div className="flex gap-4">
              {[
                { icon: <FaGithub size={16} />, href: "https://github.com/shravanisalunke" },
                { icon: <FaLinkedin size={16} />, href: "https://linkedin.com/in/shravanisalunke" },
                { icon: <FaEnvelope size={16} />, href: "mailto:salunkeshravani561@gmail.com" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#e8c872]/50 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Content Area / Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:w-[45%] mt-16 lg:mt-0 relative hidden md:block"
        >
          {/* Main Circular Mask */}
          <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] mx-auto rounded-full overflow-hidden relative bg-[#1a1a1a] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <img
              src={shravaniPhoto}
              alt="Shravani Salunke"
              className="w-full h-full object-cover opacity-70 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Side Nav Dots (Decoration matching reference) */}
          <div className="absolute top-1/2 -right-20 lg:-right-28 -translate-y-1/2 flex flex-col gap-4 hidden xl:flex">
            <div className="w-2.5 h-2.5 rounded-full bg-[#e8c872] ring-1 ring-[#e8c872] ring-offset-4 ring-offset-background"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600 ml-0.5"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600 ml-0.5"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600 ml-0.5"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600 ml-0.5"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600 ml-0.5"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
