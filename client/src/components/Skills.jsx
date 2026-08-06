import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaTerminal, 
  FaDatabase, 
  FaCloud, 
  FaLayerGroup, 
  FaServer,
  FaRobot,
  FaLink,
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaBrain,
  FaLock,
  FaCubes
} from 'react-icons/fa';
import { 
  SiExpress, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiMysql, 
  SiPostgresql, 
  SiRedis, 
  SiTypescript, 
  SiFastapi, 
  SiTensorflow, 
  SiPytorch, 
  SiEthereum, 
  SiSolidity 
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "SQL"],
      icon: <FaCode className="text-[#e8c872]" />
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
      icon: <FaLayerGroup className="text-[#e8c872]" />
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT"],
      icon: <FaServer className="text-[#e8c872]" />
    },
    {
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "LLMs", "Generative AI", "LangChain", "LangGraph", "CrewAI", "RAG", "Prompt Engineering", "AI Agents"],
      icon: <FaRobot className="text-[#e8c872]" />
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, Lambda, API Gateway, IAM, CloudWatch, DynamoDB, RDS, CloudFront)", "Docker", "Git", "GitHub", "CI/CD", "Linux"],
      icon: <FaCloud className="text-[#e8c872]" />
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Amazon RDS", "Redis"],
      icon: <FaDatabase className="text-[#e8c872]" />
    },
    {
      title: "Blockchain",
      skills: ["Hyperledger Fabric", "Ethereum", "Solidity", "Smart Contracts", "IPFS", "Web3.js"],
      icon: <FaLink className="text-[#e8c872]" />
    }
  ];

  const technologies = [
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C/C++", icon: <FaCode /> },
    { name: "JavaScript", icon: <FaCode /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "LLMs / RAG", icon: <FaBrain /> },
    { name: "AI Agents", icon: <FaRobot /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "Ethereum", icon: <SiEthereum /> },
    { name: "Solidity", icon: <SiSolidity /> },
    { name: "Hyperledger", icon: <FaCubes /> },
    { name: "Git & GitHub", icon: <FaGitAlt /> }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-3"
          >
            Capabilities & Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-black tracking-tight"
          >
            <span className="text-white">Technical </span>
            <span className="text-[#e8c872]">Skills</span>
          </motion.h2>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-[#161616] border border-white/5 p-6 sm:p-7 rounded-2xl group hover:border-[#e8c872]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center border border-white/5 group-hover:border-[#e8c872]/40 transition-colors">
                    <div className="scale-110">{cat.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#e8c872] transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-1 bg-[#0d0d0d] border border-white/10 rounded-lg text-xs font-semibold text-slate-300 group-hover:border-white/20 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integrated Core Technologies */}
        <div className="pt-6 border-t border-white/5 text-center">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.2em] text-[#e8c872] uppercase mb-6"
          >
            Core Technologies & Tools
          </motion.h4>
          
          <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-[#161616] border border-white/10 rounded-full text-slate-300 text-xs font-semibold tracking-wide hover:border-[#e8c872]/50 hover:text-white transition-all cursor-default shadow-md"
              >
                <span className="text-[#e8c872]/90 text-sm">{tech.icon}</span>
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
