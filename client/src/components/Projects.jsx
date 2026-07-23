import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRocket } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "BotaniLedger",
      subtitle: "Blockchain Supply Chain Platform",
      desc: "Enterprise-grade Hyperledger Fabric supply chain platform enabling immutable traceability of Ayurvedic herbs from farm to consumer. Features a CNN plant identification model (94.3% accuracy), IPFS, smart contracts, and an offline-first React PWA.",
      tech: ["Hyperledger Fabric", "React PWA", "CNN", "IPFS", "Solidity"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shravanisalunke/BotaniLedger",
      live: "https://github.com/shravanisalunke/BotaniLedger"
    },
    {
      title: "VaultSight AI",
      subtitle: "Banking Cybersecurity Engine",
      desc: "Cybersecurity system with real-time risk scoring and autonomous account protection using MongoDB Vector Search. Includes Auto-Lock flow for high-risk transactions (>75 score or > ₹1L) and Admin Override capabilities.",
      tech: ["MongoDB Vector", "React", "Node.js", "AI Risk Scoring"],
      image: "https://images.unsplash.com/photo-1551288049-bb6c9b438a97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shravanisalunke/VaultSight_AI",
      live: "https://github.com/shravanisalunke/VaultSight_AI"
    },
    {
      title: "AgroSense AI",
      subtitle: "Crop Disease & Diagnosis Platform",
      desc: "AI-powered platform for crop disease detection, diagnosis, and treatment recommendations using deep learning and computer vision. Integrated ML inference pipelines with a React frontend and Node/Express REST API backend.",
      tech: ["Computer Vision", "Deep Learning", "React.js", "Node.js", "REST APIs"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shravanisalunke/AgroSense_AI",
      live: "https://github.com/shravanisalunke/AgroSense_AI"
    },
    {
      title: "AI Student Dropout",
      subtitle: "Predictive Analytics Platform",
      desc: "Machine Learning analytics engine that evaluates student academic metrics and behavioral trends to predict dropout risks early, empowering educators to provide timely interventions.",
      tech: ["Python", "Scikit-Learn", "React", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shravanisalunke/AI-Student-Dropout",
      live: "https://github.com/shravanisalunke/AI-Student-Dropout"
    },
    {
      title: "WomenSafety Shield",
      subtitle: "Emergency Response SOS App",
      desc: "Real-time emergency safety mobile application featuring one-tap SOS triggers, live location tracking, geo-fencing, and automated SMS alerts sent directly to emergency contacts.",
      tech: ["React Native", "Node.js", "Socket.io", "Geolocation API"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shravanisalunke/WomenSafety-App",
      live: "https://github.com/shravanisalunke/WomenSafety-App"
    },
    {
      title: "Carpool Connect",
      subtitle: "Web3 Ridesharing DApp",
      desc: "Decentralized rideshare platform deployed on Ethereum. Features trustless escrow smart contracts, Web3 MetaMask authentication, and transparent rider-driver matching.",
      tech: ["Ethereum", "Solidity", "Smart Contracts", "React", "Web3.js"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shravanisalunke/Carpool-Connect",
      live: "https://github.com/shravanisalunke/Carpool-Connect"
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent p-8 md:p-10 flex flex-col justify-end">
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#e8c872] uppercase tracking-[0.2em] mb-2">
                     <FaRocket /> {project.subtitle}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#e8c872] transition-colors">{project.title}</h3>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-md line-clamp-3 mb-4">
                    {project.desc}
                  </p>
                  
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 bg-black/50 border border-white/10 rounded-full text-[9px] font-bold text-[#e8c872] uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-3.5 rounded-full bg-white/5 border border-white/10 text-white text-[11px] font-bold tracking-widest hover:bg-[#e8c872] hover:text-[#0d0d0d] transition-all flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt size={11} /> LIVE DEMO
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-3.5 rounded-full bg-white/5 border border-white/10 text-white text-[11px] font-bold tracking-widest hover:bg-[#e8c872] hover:text-[#0d0d0d] transition-all flex items-center justify-center gap-2"
                  >
                    <FaGithub size={13} /> VIEW CODE
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
