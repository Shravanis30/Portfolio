import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaMedal, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: "1st Place, Internal Hackathon (27 Teams)",
      subTitle: "Qualified for Smart India Hackathon (SIH)",
      date: "2024",
      desc: "Secured 1st rank out of 27 competing teams in the internal hackathon, earning qualification for Smart India Hackathon (SIH) 2024.",
      icon: <FaTrophy className="text-[#e8c872]" />
    },
    {
      title: "Solved 150+ DSA Problems",
      subTitle: "LeetCode & Codeforces",
      date: "Active",
      desc: "Solved 150+ Data Structures & Algorithms problems across LeetCode and Codeforces, developing strong algorithmic problem-solving skills.",
      icon: <FaCode className="text-[#e8c872]" />
    },
    {
      title: "Finalist in 5+ National Hackathons",
      subTitle: "National Competitions",
      date: "2023 - 2024",
      desc: "Selected as a finalist in 5+ prestigious national-level hackathons, building innovative tech solutions under competitive timeframes.",
      icon: <FaMedal className="text-[#e8c872]" />
    },
    {
      title: "Generative AI and Agents",
      subTitle: "Microsoft Learn Certificate",
      date: "Certification",
      desc: "Certified by Microsoft Learn in Generative AI fundamentals, LLM capabilities, autonomous agent design, and AI application principles.",
      icon: <FaCertificate className="text-[#e8c872]" />,
      certificateUrl: "https://learn.microsoft.com/api/achievements/share/en-us/ShravaniSalunke-0638/3ZP6TTZH?sharingId=C88629086A8ABA5E"
    },
    {
      title: "Introduction to AI Concepts",
      subTitle: "Microsoft Learn Certificate",
      date: "Certification",
      desc: "Certified by Microsoft Learn in core artificial intelligence concepts, machine learning workloads, and AI service integration.",
      icon: <FaCertificate className="text-[#e8c872]" />,
      certificateUrl: "https://learn.microsoft.com/api/achievements/share/en-us/ShravaniSalunke-0638/QL3ZXCKE?sharingId=C88629086A8ABA5E"
    },
    {
      title: "AWS Cloud Foundations",
      subTitle: "AWS Essentials Certificate",
      date: "Certification",
      desc: "Certified in AWS Foundations: Getting Started with the AWS Cloud Essentials, mastering core cloud infrastructure, security, and services.",
      icon: <FaCertificate className="text-[#e8c872]" />,
      certificateUrl: "https://drive.google.com/file/d/1PtufLCLfU1T0XJ85MeYIHOYr3n5bOa4v/view?usp=sharing"
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
            Milestones & Credentials
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
              className="bg-[#161616] border border-white/5 p-8 sm:p-10 rounded-2xl group hover:border-[#e8c872]/20 transition-all duration-300 flex flex-col items-center text-center justify-between"
            >
              <div className="flex flex-col items-center w-full">
                <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-[#e8c872]/30 transition-colors">
                  <div className="scale-[1.7]">{ach.icon}</div>
                </div>
                
                <div className="mb-4">
                  <span className="text-[10px] font-bold text-[#e8c872] uppercase tracking-[0.2em]">{ach.date}</span>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#e8c872] transition-colors leading-snug">
                    {ach.title}
                  </h3>
                </div>
                
                <p className="text-[#e8c872]/70 text-xs font-semibold uppercase tracking-wider mb-4 italic">{ach.subTitle}</p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {ach.desc}
                </p>
              </div>

              {ach.certificateUrl && (
                <a
                  href={ach.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 px-5 py-2.5 rounded-full border border-[#e8c872]/30 bg-[#e8c872]/5 text-[#e8c872] text-[10px] font-bold tracking-widest uppercase hover:bg-[#e8c872]/20 hover:border-[#e8c872] transition-all inline-flex items-center gap-2 shadow-md"
                >
                  View Credential <FaExternalLinkAlt size={10} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
