import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      institution: "Vishwakarma Institute Of Technology",
      degree: "B.Tech in CSE (IoT, Cyber Security & Blockchain)",
      year: "Sept 2025 - Present",
      details: "",
      stats: "Pursuing",
      location: "Pune, Maharashtra",
      icon: <FaGraduationCap className="text-[#e8c872]" />,
      current: true
    },
    {
      institution: "Dr. Babasaheb Ambedkar Technological University",
      degree: "Diploma in Computer Engineering",
      year: "Sept 2022 - June 2025",
      details: "",
      stats: "CGPA: 9.44 / 10",
      location: "Lonere, Raigad",
      icon: <FaSchool className="text-[#e8c872]" />,
      current: false
    }
  ];

  return (
    <section id="education" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-4"
          >
            Learning Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-black tracking-tight"
          >
            <span className="text-white">Education </span>
            <span className="text-[#e8c872]">History</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#e8c872] via-[#e8c872]/40 to-transparent -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-[#0d0d0d] border-2 border-[#e8c872] flex items-center justify-center shadow-[0_0_12px_rgba(232,200,114,0.6)]">
                      <div className="w-2 h-2 rounded-full bg-[#e8c872]" />
                    </div>
                  </div>

                  {/* Card Box */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="bg-[#161616] border border-white/10 hover:border-[#e8c872]/40 p-8 rounded-2xl transition-all duration-300 shadow-xl group">
                      
                      {/* Header Badge Row */}
                      <div className={`flex flex-wrap items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[#1a1a1a] border border-[#e8c872]/30 rounded-full text-[11px] font-bold text-[#e8c872]">
                          <FaCalendarAlt size={11} />
                          {edu.year}
                        </span>
                        {edu.current && (
                          <span className="px-3 py-1 bg-[#10b981]/10 border border-[#10b981]/30 rounded-full text-[10px] font-bold text-[#10b981] uppercase tracking-wider">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Title & Institution */}
                      <h3 className="text-xl font-bold text-white group-hover:text-[#e8c872] transition-colors leading-tight mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-[#e8c872]/80 text-xs font-bold uppercase tracking-widest mb-4">
                        {edu.institution}
                      </p>

                      {/* Description / Details */}
                      {edu.details && (
                        <p className="text-slate-400 text-xs leading-relaxed mb-6">
                          {edu.details}
                        </p>
                      )}

                      {/* Footer Info */}
                      <div className={`pt-4 border-t border-white/5 flex flex-wrap items-center gap-4 text-xs ${isEven ? 'md:justify-end' : 'justify-between'}`}>
                        {edu.stats && (
                          <span className="text-white font-bold bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                            {edu.stats}
                          </span>
                        )}
                        <span className="text-slate-500 font-semibold flex items-center gap-1">
                          <FaMapMarkerAlt size={12} className="text-[#e8c872]" />
                          {edu.location}
                        </span>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
