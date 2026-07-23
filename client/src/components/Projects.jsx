import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRocket } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "BotaniLedger",
      desc: "Enterprise-grade Hyperledger Fabric supply chain platform enabling immutable traceability of Ayurvedic herbs. Includes CNN-based plant ID and IPFS integration.",
      tech: ["Hyperledger Fabric", "React", "CNN", "IPFS"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shravanisalunke",
      live: "#"
    },
    {
      title: "VaultSight AI",
      desc: "Cybersecurity system with real-time risk scoring, autonomous account protection using MongoDB Vector Search, and an Auto-Lock Flow for high-risk transactions.",
      tech: ["MongoDB Vector Search", "React", "Node.js", "AI"],
      image: "https://images.unsplash.com/photo-1551288049-bb6c9b438a97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shravanisalunke",
      live: "#"
    },
    {
      title: "AgroSense AI",
      desc: "End-to-end AI-powered platform for crop disease detection, diagnosis, and treatment recommendations using deep learning and computer vision.",
      tech: ["Deep Learning", "React", "Node.js", "Vision"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shravanisalunke",
      live: "#"
    },
    {
      title: "Carpool Connect",
      desc: "Decentralized ridesharing DApp on Ethereum. Features trustless escrow system with Solidity smart contracts and password-less authentication via MetaMask.",
      tech: ["Ethereum", "Solidity", "React", "MetaMask"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shravanisalunke",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
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
            My Creative Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-black tracking-tight"
          >
            <span className="text-white">Featured </span>
            <span className="text-[#e8c872]">Projects</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-[500px] rounded-3xl overflow-hidden border border-white/5 hover:border-[#e8c872]/30 transition-all"
            >
              {/* Background Image */}
              <img 
                src={project.image} 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                alt={project.title}
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent p-10 flex flex-col justify-end">
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#e8c872] uppercase tracking-[0.2em] mb-4">
                     <FaRocket /> Open Live Site
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#e8c872] transition-colors">{project.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-md line-clamp-2 md:line-clamp-none">
                    {project.desc}
                  </p>
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.live}
                    className="flex-1 text-center py-4 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest hover:bg-[#e8c872] hover:text-[#0d0d0d] transition-all"
                  >
                    LIVE DEMO
                  </a>
                  <a 
                    href={project.github}
                    className="flex-1 text-center py-4 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest hover:bg-[#e8c872] hover:text-[#0d0d0d] transition-all"
                  >
                    VIEW CODE
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
           <a 
             href="https://github.com/shravanisalunke"
             target="_blank"
             rel="noreferrer"
             className="px-10 py-5 rounded-full border border-[#e8c872]/30 text-[#e8c872] text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#e8c872]/10 transition-all inline-flex items-center gap-3"
           >
             View All on GitHub <FaGithub />
           </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
