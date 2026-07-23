import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaCertificate } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      institution: "Vishwakarma Institute Of Technology",
      degree: "B.Tech in CSE (IoT, Cyber Security & Blockchain)",
      year: "Sept 2025",
      details: "Coursework: AI, Machine Learning, Deep Learning, NLP, Database Management Systems, Data Structures & Algorithms, Operating Systems, OOP, Networking, Cloud Computing, Cybersecurity, Blockchain Basics.",
      stats: "",
      location: "Pune, Maharashtra",
      icon: <FaGraduationCap className="text-[#e8c872]" />
    },
    {
      institution: "Dr. Babasaheb Ambedkar Technological University",
      degree: "Diploma in Computer Engineering",
      year: "Sept 2022 - June 2025",
      details: "Focused on software development, cloud computing, and system design.",
      stats: "CGPA: 9.40 / 10",
      location: "Lonere, Raigad",
      icon: <FaSchool className="text-[#e8c872]" />
    }
  ];

  return (
    <section id="education" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-4"
          >
            Learning
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

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#161616] border border-white/5 p-10 rounded-2xl group hover:border-[#e8c872]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center mb-8 border border-white/5 group-hover:border-[#e8c872]/30 transition-colors">
                <div className="scale-125">{edu.icon}</div>
              </div>
              
              <div className="mb-6">
                <span className="text-[10px] font-bold text-[#e8c872] uppercase tracking-[0.2em]">{edu.year}</span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#e8c872] transition-colors leading-tight">
                  {edu.degree}
                </h3>
              </div>
              
              <p className="text-[#e8c872]/60 text-xs font-bold uppercase tracking-widest mb-4">{edu.institution}</p>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {edu.details}
              </p>
              
              <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                 <span className="text-white text-sm font-bold">{edu.stats}</span>
                 <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">{edu.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
