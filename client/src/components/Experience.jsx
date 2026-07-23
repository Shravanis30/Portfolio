import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "IITianCraft",
      role: "Software Developer Intern",
      period: "Jun 2025 - Jun 2026",
      type: "Internship",
      location: "Hybrid",
      description: "Working on end-to-end production deployments and architecting web presences with focus on responsiveness and performance.",
      tasks: [
        "Engineered and delivered 10+ production-ready full-stack applications, spanning business websites, SaaS products, and enterprise management systems.",
        "Owned the complete development lifecycle by designing responsive frontends, developing scalable backend services, and building REST APIs.",
        "Built, deployed, and maintained multiple live applications—including the company's official website—handling cloud deployment and server management.",
        "Collaborated directly with clients to convert business requirements into scalable software solutions; recognized with a Letter of Recommendation."
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Cloud Deployment"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
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
            Career Roadmap
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-black tracking-tight"
          >
            <span className="text-white">Where I've </span>
            <span className="text-[#e8c872]">Worked</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#e8c872] via-[#e8c872]/40 to-transparent -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col md:flex-row items-center"
              >
                {/* Timeline Dot Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#0d0d0d] border-2 border-[#e8c872] flex items-center justify-center shadow-[0_0_15px_rgba(232,200,114,0.7)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#e8c872] animate-ping opacity-75" />
                  </div>
                </div>

                {/* Card Box */}
                <div className="w-full md:w-[85%] pl-12 md:pl-16">
                  <div className="bg-[#161616] border border-white/10 hover:border-[#e8c872]/40 p-8 md:p-10 rounded-2xl transition-all duration-300 shadow-xl group relative">
                    
                    {/* Header Row */}
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                      <div>
                        <span className="text-[10px] font-bold text-[#e8c872] uppercase tracking-[0.25em] flex items-center gap-2 mb-2">
                          <FaBriefcase size={12} /> {exp.company}
                        </span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#e8c872] transition-colors leading-tight">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-[#e8c872]/10 border border-[#e8c872]/20 rounded-full text-[#e8c872] text-[10px] font-bold tracking-widest uppercase">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Date & Location Badges */}
                    <div className="flex flex-wrap items-center gap-4 text-slate-400 text-xs font-semibold mb-8">
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-[#1a1a1a] rounded-full border border-white/5">
                        <FaCalendarAlt size={11} className="text-[#e8c872]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-[#1a1a1a] rounded-full border border-white/5">
                        <FaMapMarkerAlt size={11} className="text-[#e8c872]" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Tasks Bullet List */}
                    <ul className="space-y-4 mb-8">
                      {exp.tasks.map((task, tIdx) => (
                        <li key={tIdx} className="flex gap-3 text-slate-300 text-xs md:text-sm leading-relaxed">
                          <span className="text-[#e8c872] font-bold mt-0.5">•</span>
                          {task}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-3 py-1 bg-[#0d0d0d] border border-white/5 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
