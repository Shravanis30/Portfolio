import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaTerminal, 
  FaDatabase, 
  FaCloud, 
  FaLayerGroup, 
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaRobot,
  FaLink
} from 'react-icons/fa';
import { SiExpress, SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skillCards = [
    {
      title: "Languages",
      description: "C, C++, Java, Python, JavaScript, TypeScript, SQL, HTML, CSS",
      icon: <FaCode className="text-[#e8c872]" />
    },
    {
      title: "Frameworks & Libraries",
      description: "React.js, Next.js, Node.js, Express.js, Tailwind CSS, TensorFlow, PyTorch, Scikit-learn, OpenCV, LangChain",
      icon: <FaLayerGroup className="text-[#e8c872]" />
    },
    {
      title: "AI & Machine Learning",
      description: "Machine Learning, Deep Learning, Computer Vision, CNNs, Generative AI, RAG, LLM Applications, Prompt Engineering",
      icon: <FaRobot className="text-[#e8c872]" />
    },
    {
      title: "Blockchain & Web3",
      description: "Hyperledger Fabric, Ethereum, Solidity, Smart Contracts, IPFS, Web3.js/Ethers.js, DApps",
      icon: <FaLink className="text-[#e8c872]" />
    },
    {
      title: "Cloud, DevOps & Tools",
      description: "AWS (EC2, S3, Lambda, API Gateway), Docker, Git, GitHub, Postman, MongoDB Atlas Vector Search",
      icon: <FaCloud className="text-[#e8c872]" />
    },
    {
      title: "Databases & Core",
      description: "MySQL, MongoDB, DynamoDB, Redis. Data Structures, Algorithms, OOP, Operating Systems, DBMS",
      icon: <FaDatabase className="text-[#e8c872]" />
    }
  ];

  const technologies = [
    { name: "C/C++", icon: <FaCode /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Git", icon: <FaGitAlt /> }
  ];

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
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
            What I Know
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-black tracking-tight"
          >
            <span className="text-white">Technical </span>
            <span className="text-[#e8c872]">Skills</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {skillCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#161616] border border-white/5 p-10 rounded-2xl group hover:border-[#e8c872]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center mb-8 border border-white/5 group-hover:border-[#e8c872]/30 transition-colors">
                <div className="scale-125">{card.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-[#e8c872] transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technologies Pills */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-10"
          >
            Technologies I work with
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2.5 px-5 py-2.5 bg-[#161616] border border-white/10 rounded-full text-slate-300 text-xs font-semibold tracking-wide hover:border-[#e8c872]/40 hover:text-white transition-all cursor-default"
              >
                <span className="text-[#e8c872]/80">{tech.icon}</span>
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
