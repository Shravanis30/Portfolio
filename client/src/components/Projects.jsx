import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaCrown, FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // 3D Tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      className={`relative group rounded-2xl overflow-hidden border transition-all duration-500 shadow-2xl flex flex-col justify-between min-h-[580px] bg-[#121212] ${
        project.flagship 
          ? 'border-[#e8c872]/50 shadow-[0_0_20px_rgba(232,200,114,0.18)]' 
          : 'border-white/10 hover:border-[#e8c872]/40'
      }`}
    >
      {/* Radial Spotlight Follower */}
      <div 
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 200, 114, 0.18), transparent 75%)`,
        }}
      />

      {/* Flagship Glow Border */}
      {project.flagship && (
        <div className="absolute -inset-[1px] bg-gradient-to-r from-[#e8c872]/60 via-amber-200/30 to-[#e8c872]/60 rounded-2xl blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}

      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={project.image} 
          className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-55 transition-all duration-700 ease-out"
          alt={project.title}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/90 to-[#0d0d0d]/40 group-hover:via-[#0d0d0d]/80 transition-all duration-500" />
      </div>

      {/* Top Header Badge Area */}
      <div className="relative z-10 p-5 flex flex-wrap justify-between items-center gap-2">
        {project.flagship ? (
          <motion.span 
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="px-2.5 py-1 bg-[#e8c872]/20 border border-[#e8c872]/60 rounded-full text-[#e8c872] text-[9px] font-extrabold tracking-wider uppercase flex items-center gap-1 shadow-[0_0_10px_rgba(232,200,114,0.4)] backdrop-blur-md"
          >
            <FaCrown size={10} className="text-[#e8c872]" /> FLAGSHIP
          </motion.span>
        ) : (
          <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-slate-400 text-[9px] font-bold tracking-wider uppercase backdrop-blur-md">
            {project.category}
          </span>
        )}

        <span className="text-[9px] font-bold text-[#e8c872] uppercase tracking-wider flex items-center gap-1 bg-black/50 px-2.5 py-1 rounded-full border border-white/5 backdrop-blur-md">
          <FaRocket size={9} className="animate-pulse" /> {project.subtitle}
        </span>
      </div>
      
      {/* Content Area */}
      <div className="relative z-10 p-5 flex-1 flex flex-col justify-end">
        
        <h3 className="text-lg font-black text-white mb-3 group-hover:text-[#e8c872] transition-colors leading-tight tracking-tight">
          {project.title}
        </h3>
        
        {/* Bullet Points List */}
        <ul className="space-y-2 mb-4">
          {project.bullets.map((bullet, bIdx) => (
            <li key={bIdx} className="flex items-start gap-2 text-slate-300 text-xs leading-relaxed">
              <span className="text-[#e8c872] font-bold mt-0.5 text-[10px]">◆</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t, tIdx) => (
            <motion.span 
              key={tIdx} 
              whileHover={{ scale: 1.06 }}
              className="px-2 py-0.5 bg-black/70 backdrop-blur-md border border-white/10 rounded-md text-[8.5px] font-bold text-[#e8c872] uppercase tracking-wider shadow-sm"
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2 border-t border-white/5">
          <motion.a 
            href={project.live}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 text-center py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white text-[9px] font-bold tracking-wider hover:bg-[#e8c872] hover:text-[#0d0d0d] hover:border-[#e8c872] transition-all flex items-center justify-center gap-1.5 shadow-lg"
          >
            <FaExternalLinkAlt size={9} /> LIVE DEMO
          </motion.a>

          <motion.a 
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 text-center py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white text-[9px] font-bold tracking-wider hover:bg-[#e8c872] hover:text-[#0d0d0d] hover:border-[#e8c872] transition-all flex items-center justify-center gap-1.5 shadow-lg"
          >
            <FaGithub size={11} /> GITHUB REPO
          </motion.a>
        </div>

      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI & ML', 'Blockchain', 'Full-Stack'];

  const projects = [
    {
      title: "PersonaOS - AI Operating System",
      category: "AI & ML",
      flagship: true,
      subtitle: "Flagship AI OS",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "Architected a local-first AI Operating System with persistent Digital Twin, long-term memory, RAG & Neo4j knowledge graph.",
        "Designed multi-agent framework (Career, Learning, Productivity, Wellness) with LangGraph task orchestration.",
        "Enterprise backend with FastAPI, vector search, encrypted storage, Docker, Kubernetes & AWS infrastructure."
      ],
      tech: ["Flutter", "FastAPI", "Python", "Rust", "PostgreSQL", "SQLCipher", "Qdrant", "Neo4j", "LangGraph", "LiteLLM", "Ollama", "Docker", "Kubernetes", "AWS"],
      github: "https://github.com/shravanisalunke/PersonaOS",
      live: "https://github.com/shravanisalunke/PersonaOS"
    },
    {
      title: "AgentChain - AI Workforce Platform",
      category: "AI & ML",
      flagship: true,
      subtitle: "Autonomous AI Workforce",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "Cloud-native multi-agent AI operating system for workflow automation, document intelligence & long-term memory.",
        "Built microservices with RAG, vector search, REST APIs, RBAC & real-time collaboration.",
        "Deployed on AWS (EC2, Lambda, S3, API Gateway, DynamoDB) with CI/CD & high availability."
      ],
      tech: ["Python", "FastAPI", "React.js", "Next.js", "LangGraph", "CrewAI", "Llama 3", "PostgreSQL", "Qdrant", "Ethereum", "Solidity", "IPFS", "Docker", "Redis", "AWS"],
      github: "https://github.com/shravanisalunke/AgentChain",
      live: "https://github.com/shravanisalunke/AgentChain"
    },
    {
      title: "BotaniLedger",
      category: "Blockchain",
      flagship: false,
      subtitle: "Supply Chain Traceability",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "Hyperledger Fabric supply chain enabling immutable herb traceability from farm to consumer.",
        "Features CNN plant identification model (94.3% accuracy), IPFS, smart contracts & React PWA."
      ],
      tech: ["Hyperledger Fabric", "React PWA", "CNN", "IPFS", "Solidity"],
      github: "https://github.com/shravanisalunke/BotaniLedger",
      live: "https://github.com/shravanisalunke/BotaniLedger"
    },
    {
      title: "VaultSight AI",
      category: "AI & ML",
      flagship: false,
      subtitle: "Cybersecurity Engine",
      image: "https://images.unsplash.com/photo-1551288049-bb6c9b438a97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "Banking security system with real-time risk scoring & account protection via MongoDB Vector Search.",
        "Includes Auto-Lock flow for high-risk transactions (>75 score) and Admin Override capabilities."
      ],
      tech: ["MongoDB Vector", "React", "Node.js", "FastAPI", "AI Risk Scoring"],
      github: "https://github.com/shravanisalunke/VaultSight_AI",
      live: "https://github.com/shravanisalunke/VaultSight_AI"
    },
    {
      title: "AgroSense AI",
      category: "AI & ML",
      flagship: false,
      subtitle: "Crop Disease Diagnosis",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "AI crop disease detection & diagnosis using deep learning, computer vision & treatment recommendations.",
        "Integrated ML inference pipelines with React frontend and Node/Express REST API backend."
      ],
      tech: ["Computer Vision", "PyTorch", "OpenCV", "React.js", "REST APIs"],
      github: "https://github.com/shravanisalunke/AgroSense_AI",
      live: "https://github.com/shravanisalunke/AgroSense_AI"
    },
    {
      title: "AI Student Dropout Engine",
      category: "AI & ML",
      flagship: false,
      subtitle: "Predictive Analytics",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "ML analytics engine evaluating academic metrics & behavioral trends to predict dropout risks early.",
        "Empowers educators to provide timely interventions with automated analytics & dashboards."
      ],
      tech: ["Python", "Scikit-Learn", "React", "Express", "MongoDB"],
      github: "https://github.com/shravanisalunke/AI-Student-Dropout",
      live: "https://github.com/shravanisalunke/AI-Student-Dropout"
    },
    {
      title: "WomenSafety Shield",
      category: "Full-Stack",
      flagship: false,
      subtitle: "Emergency Response App",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "Real-time emergency safety mobile app featuring one-tap SOS triggers & live location tracking.",
        "Geo-fencing and automated SMS alerts sent directly to emergency contacts during crises."
      ],
      tech: ["React Native", "Node.js", "Socket.io", "Geolocation API"],
      github: "https://github.com/shravanisalunke/WomenSafety-App",
      live: "https://github.com/shravanisalunke/WomenSafety-App"
    },
    {
      title: "Carpool Connect",
      category: "Blockchain",
      flagship: false,
      subtitle: "Web3 Rideshare DApp",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      bullets: [
        "Decentralized rideshare platform on Ethereum with trustless escrow smart contracts.",
        "Features Web3 MetaMask authentication and transparent rider-driver matching logic."
      ],
      tech: ["Ethereum", "Solidity", "Smart Contracts", "React", "Web3.js"],
      github: "https://github.com/shravanisalunke/Carpool-Connect",
      live: "https://github.com/shravanisalunke/Carpool-Connect"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-4"
          >
            Innovation Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-black tracking-tight mb-8"
          >
            <span className="text-white">Featured </span>
            <span className="text-[#e8c872]">Projects</span>
          </motion.h2>

          {/* Interactive Filter Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'text-[#0d0d0d]' 
                    : 'text-slate-400 hover:text-white bg-white/5 border border-white/10'
                }`}
              >
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 bg-[#e8c872] rounded-full shadow-[0_0_15px_rgba(232,200,114,0.4)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {cat}
                </span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid: 2 rows x 4 columns (8 Projects Total on Desktop) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All GitHub CTA */}
        <div className="text-center mt-20">
           <motion.a 
             href="https://github.com/shravanisalunke"
             target="_blank"
             rel="noreferrer"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-10 py-5 rounded-full border border-[#e8c872]/40 bg-[#e8c872]/5 text-[#e8c872] text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#e8c872]/20 hover:border-[#e8c872] transition-all inline-flex items-center gap-3 shadow-xl"
           >
             View All on GitHub <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
           </motion.a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
