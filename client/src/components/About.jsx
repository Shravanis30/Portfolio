import React from 'react';
import { motion } from 'framer-motion';
import { FaUserAstronaut, FaCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Visual/Image Area */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="w-full aspect-square rounded-2xl bg-[#161616] border border-white/5 overflow-hidden relative group">
               <img 
                 src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Coding Concept" 
                 className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60" />
               
               {/* Floating Icon Badges */}
               <div className="absolute top-8 left-8 p-4 bg-[#e8c872]/10 backdrop-blur-xl border border-[#e8c872]/20 rounded-xl shadow-2xl">
                  <FaCode className="text-[#e8c872] text-2xl" />
               </div>
            </div>
            
            {/* Absolute element behind */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e8c872] opacity-10 blur-3xl rounded-full" />
          </motion.div>

          {/* Text Content Area */}
          <div className="lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-4"
            >
              Get to know me
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight mb-8"
            >
              <span className="text-white">Design & </span>
              <span className="text-[#e8c872]">Development</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-slate-400 text-lg leading-relaxed">
                I completed my Diploma in Computer Engineering from <span className="text-white font-semibold">Dr. Babasaheb Ambedkar Technological University</span> (CGPA 9.44/10) and am pursuing B.Tech in CSE (IoT, Cyber Security & Blockchain) at <span className="text-white font-semibold">Vishwakarma Institute of Technology, Pune</span>. Building at the intersection of full-stack development, AI, and cloud architecture, I enjoy transforming complex requirements into scalable, user-centric software solutions.
              </p>
              
              <p className="text-slate-400 text-lg leading-relaxed">
                As a Software Developer Intern at <span className="text-white font-semibold italic">IITianCraft</span>, I have engineered and deployed <span className="text-white font-semibold">10+ production-ready full-stack applications</span>, building responsive frontends, scalable backends, REST APIs, and managing end-to-end cloud deployments — receiving a <span className="text-white font-semibold">Letter of Recommendation</span> for technical ownership and client collaboration.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                 <div className="p-6 bg-[#161616] border border-white/5 rounded-2xl group hover:border-[#e8c872]/20 transition-all">
                    <FaUserAstronaut className="text-[#e8c872] text-xl mb-4" />
                    <h4 className="text-white font-bold mb-2">Problem Solver</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Comfortable going from abstract idea to technical execution fast.</p>
                 </div>
                 
                 <div className="p-6 bg-[#161616] border border-white/5 rounded-2xl group hover:border-[#e8c872]/20 transition-all">
                    <FaLightbulb className="text-[#e8c872] text-xl mb-4" />
                    <h4 className="text-white font-bold mb-2">Innovation Focus</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Won the IIC Internal Hackathon for innovative technical problem-solving.</p>
                 </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
