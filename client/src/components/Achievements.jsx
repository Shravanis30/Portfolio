import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaCertificate } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: "Internal Hackathon Winner",
      subTitle: "Ranked 1st out of 27 Teams",
      date: "2024",
      desc: "Qualified for the Smart India Hackathon (SIH) by securing 1st place in the internal university-level hackathon for innovative problem-solving.",
      icon: <FaTrophy className="text-[#e8c872]" />
    },
    {
      title: "Research Paper Publication",
      subTitle: "International Conference",
      date: "2024",
      desc: "Researched and presented findings on LLM performance and accuracy in medical AI applications at an international level.",
      icon: <FaAward className="text-[#e8c872]" />
    },
    {
      title: "Certificates & Honors",
      subTitle: "Professional Development",
      date: "2023 - 2024",
      desc: "Earned certifications in Full Stack Development and Cloud Computing through various industry-recognized platforms.",
      icon: <FaCertificate className="text-[#e8c872]" />
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
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
            Milestones
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-black tracking-tight"
          >
            <span className="text-white">Honors & </span>
            <span className="text-[#e8c872]">Achievements</span>
          </motion.h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#161616] border border-white/5 p-10 rounded-2xl group hover:border-[#e8c872]/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:border-[#e8c872]/30 transition-colors">
                <div className="scale-[1.7]">{ach.icon}</div>
              </div>
              
              <div className="mb-6">
                <span className="text-[10px] font-bold text-[#e8c872] uppercase tracking-[0.2em]">{ach.date}</span>
                <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-[#e8c872] transition-colors leading-tight">
                  {ach.title}
                </h3>
              </div>
              
              <p className="text-[#e8c872]/60 text-xs font-bold uppercase tracking-widest mb-4 italic">{ach.subTitle}</p>
              
              <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
                {ach.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
