import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCalendarAlt, FaRobot, FaMapMarkedAlt, FaPlug, FaArrowDown, FaDesktop } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "IITianCraft",
      role: "Full Stack Developer Intern",
      period: "Jun 2025 - Jun 2026",
      description: "Working on end-to-end production deployments and architecting web presences with focus on responsiveness and performance.",
      tasks: [
        "Engineered and delivered 10+ production-ready full-stack applications, spanning business websites, SaaS products, and enterprise management systems.",
        "Owned the complete development lifecycle by designing responsive frontends, developing scalable backend services, and building REST APIs.",
        "Built, deployed, and maintained multiple live applications—including the company's official website—handling cloud deployment and server management.",
        "Collaborated directly with clients to convert business requirements into scalable software solutions; recognized with a Letter of Recommendation."
      ],
      internshipProjects: [
        {
          name: "SaaS Cafe Management",
          desc: "Built an AI-powered chatbot for the platform to handle queries, course information, and support — improving response time.",
          tech: ["React", "Express", "MongoDB"],
          icon: <FaRobot />
        },
        {
          name: "School Management System",
          desc: "Developed a comprehensive system for handling student data, academics, and administrative workflows in a centralized hub.",
          tech: ["Node.js", "MySQL", "AWS"],
          icon: <FaMapMarkedAlt />
        },
        {
          name: "IITianCraft Official Site",
          desc: "Architected the company’s official web presence, focusing on responsive design and optimized performance for users.",
          tech: ["HTML", "CSS", "Bootstrap"],
          icon: <FaPlug />
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
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
            Where I've worked
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-black tracking-tight"
          >
            <span className="text-white">Professional </span>
            <span className="text-[#e8c872]">Experience</span>
          </motion.h2>
        </div>

        {/* Main Experience Card */}
        <div className="max-w-5xl mx-auto mb-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full bg-[#161616] border border-white/5 p-8 md:p-12 rounded-3xl relative mb-12"
              >
                {/* Decoration vertical line on left */}
                <div className="absolute left-0 top-12 bottom-12 w-[1px] bg-gradient-to-b from-transparent via-[#e8c872]/40 to-transparent -translate-x-1/2" />
                
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-[#1a1a1a] rounded-2xl flex items-center justify-center border border-white/5 text-[#e8c872]">
                      <FaDesktop size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[#e8c872] text-sm font-bold tracking-tight uppercase">{exp.company}</span>
                        <FaExternalLinkAlt size={12} className="text-slate-600" />
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-1.5 bg-[#e8c872]/10 border border-[#e8c872]/20 rounded-full">
                    <span className="text-[#e8c872] text-[10px] font-bold tracking-widest uppercase">Internship</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-10">
                   <FaCalendarAlt /> {exp.period} &nbsp;&bull;&nbsp; 1 Year
                </div>

                <ul className="space-y-5 mb-6">
                  {exp.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex gap-4 text-slate-400 text-sm leading-relaxed">
                      <span className="text-slate-600 mt-2 font-bold">—</span>
                      {task}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-10">
                   {["HTML", "CSS", "Bootstrap", "UI/UX", "JavaScript"].map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-[#0d0d0d] border border-white/5 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                         {tag}
                      </span>
                   ))}
                </div>
              </motion.div>

              {/* Animated Bridge / Moving Arrow Section */}
              <div className="flex flex-col items-center mb-16 relative">
                 <div className="w-[1px] h-12 bg-white/5 mb-4" />
                 
                 <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-10 h-10 rounded-full bg-[#0d0d0d] border border-[#e8c872]/40 flex items-center justify-center text-[#e8c872] absolute -bottom-1"
                 >
                    <FaArrowDown size={14} />
                 </motion.div>
              </div>

              {/* Projects during Internship area */}
              <div className="w-full">
                <div className="text-center mb-12">
                   <p className="text-[10px] font-bold tracking-[0.3em] text-[#e8c872] uppercase mb-4">
                     Projects During Internship
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {exp.internshipProjects.map((proj, pIdx) => (
                     <motion.div
                       key={pIdx}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.5, delay: pIdx * 0.1 }}
                       className="bg-[#161616] border border-white/5 p-8 rounded-2xl group hover:border-[#e8c872]/20 transition-all shadow-xl"
                     >
                        <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center mb-8 border border-white/5 text-[#e8c872]">
                           {proj.icon}
                        </div>
                        <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#e8c872] transition-colors">{proj.name}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-3">
                           {proj.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                           {proj.tech.map((t, idx) => (
                             <span key={idx} className="text-[9px] font-bold text-slate-600 uppercase tracking-widest px-2 py-1 bg-black/30 rounded-full border border-white/5">
                               {t}
                             </span>
                           ))}
                        </div>
                     </motion.div>
                   ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
