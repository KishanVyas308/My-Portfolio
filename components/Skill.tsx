"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaGitlab, FaEthereum, FaArrowRight } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiRedis, SiAmazon, SiKubernetes, SiFirebase, SiFlutter, SiGraphql, SiNginx, SiCloudflare, SiVercel, SiNetlify, SiSolidity, SiIpfs, SiPostman, SiFigma, SiAdobexd } from 'react-icons/si';
import { TbBrandPrisma } from "react-icons/tb";
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Skill category tabs
const categories = [
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile App Development" },
    { id: "backend", label: "Backend Development" },
    { id: "database", label: "Database & Storage" },
    { id: "devops", label: "DevOps & Deployment" },
    { id: "blockchain", label: "Blockchain & Web3" },
    { id: "tools", label: "Tools & Productivity" }
];

// Skills data organized by category
const skillsData: any = {
    web: [
        { icon: <FaReact />, name: "React.js", level: 90, description: "Frontend library for building user interfaces", link: "#" },
        { icon: <SiNextdotjs />, name: "Next.js", level: 85, description: "React framework for production", link: "#" },
        { icon: <SiTypescript />, name: "TypeScript", level: 80, description: "Strongly typed JavaScript", link: "#" },
        { icon: <SiJavascript />, name: "JavaScript", level: 95, description: "Programming language of the web", link: "#" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 90, description: "Utility-first CSS framework", link: "#" },
        { icon: <FaHtml5 />, name: "HTML5", level: 95, description: "Standard markup language for web pages", link: "#" },
        { icon: <FaCss3Alt />, name: "CSS3", level: 90, description: "Style sheet language for web pages", link: "#" },
        { icon: <FaBootstrap />, name: "Bootstrap", level: 85, description: "CSS framework for responsive design", link: "#" },
        { icon: <SiGraphql />, name: "GraphQL", level: 75, description: "API query language and runtime", link: "#" }
    ],
    mobile: [
        { icon: <SiFlutter />, name: "Flutter", level: 85, description: "Google's UI toolkit for cross-platform apps", link: "#" },
        { icon: <SiFirebase />, name: "Firebase", level: 90, description: "Platform for mobile and web applications", link: "#" },
        { icon: <FaReact />, name: "React Native", level: 80, description: "Framework for building native apps with React", link: "#" }
    ],
    backend: [
        { icon: <FaPython />, name: "Python", level: 85, description: "High-level programming language", link: "#" },
        { icon: <FaNodeJs />, name: "Node.js", level: 90, description: "JavaScript runtime environment", link: "#" },
        { icon: <SiExpress />, name: "Express.js", level: 85, description: "Web application framework for Node.js", link: "#" },
        { icon: <TbBrandPrisma />, name: "Prisma ORM", level: 80, description: "Next-generation ORM for Node.js and TypeScript", link: "#" },
        { icon: <SiGraphql />, name: "GraphQL", level: 75, description: "API query language and runtime", link: "#" }
    ],
    database: [
        { icon: <SiPostgresql />, name: "PostgreSQL", level: 85, description: "Advanced open-source relational database", link: "#" },
        { icon: <SiMongodb />, name: "MongoDB", level: 90, description: "NoSQL document database", link: "#" },
        { icon: <SiFirebase />, name: "Firebase Firestore", level: 85, description: "NoSQL cloud database", link: "#" },
        { icon: <SiRedis />, name: "Redis", level: 80, description: "In-memory data structure store", link: "#" }
    ],
    devops: [
        { icon: <FaDocker />, name: "Docker", level: 80, description: "Platform for developing, shipping, and running applications", link: "#" },
        { icon: <SiKubernetes />, name: "Kubernetes", level: 75, description: "Container orchestration system", link: "#" },
        { icon: <SiNginx />, name: "Nginx", level: 75, description: "Web server and reverse proxy", link: "#" },
        { icon: <SiCloudflare />, name: "Cloudflare", level: 85, description: "Web infrastructure and security company", link: "#" },
        { icon: <SiVercel />, name: "Vercel", level: 90, description: "Platform for frontend frameworks and static sites", link: "#" },
        { icon: <SiNetlify />, name: "Netlify", level: 85, description: "Web development platform", link: "#" },
        { icon: <SiAmazon />, name: "AWS", level: 80, description: "Cloud computing platform", link: "#" }
    ],
    blockchain: [
        { icon: <SiSolidity />, name: "Solidity", level: 85, description: "Object-oriented programming language for Ethereum", link: "#" },
        { icon: <FaEthereum />, name: "Ethereum", level: 80, description: "Decentralized, open-source blockchain", link: "#" },
        { icon: <SiIpfs />, name: "IPFS", level: 75, description: "Peer-to-peer hypermedia protocol", link: "#" }
    ],
    tools: [
        { icon: <FaGitAlt />, name: "Git", level: 95, description: "Distributed version control system", link: "#" },
        { icon: <FaGithub />, name: "GitHub", level: 90, description: "Code hosting platform for Git", link: "#" },
        { icon: <FaGitlab />, name: "GitLab", level: 85, description: "DevOps platform", link: "#" },
        { icon: <SiPostman />, name: "Postman", level: 90, description: "API development environment", link: "#" },
        { icon: <SiFigma />, name: "Figma", level: 80, description: "Collaborative interface design tool", link: "#" },
        { icon: <SiAdobexd />, name: "Adobe XD", level: 75, description: "Vector-based UI/UX design tool", link: "#" }
    ]
};

// Card Components
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

// Enhanced Hover Effect for Skills
export const SkillHoverEffect = ({
  items,
  className,
}: {
  items: {
    icon: React.ReactNode;
    name: string;
    description: string;
    level: number;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={`skill-${idx}`}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-purple-900/20 dark:bg-purple/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex justify-center mb-2">
              <div className="text-purple text-4xl">{item.icon}</div>
            </div>
            <CardTitle className='flex justify-center'>{item.name}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            
            {/* Skill level indicator */}
            <div className="w-full bg-zinc-700/30 rounded-full h-2 mt-6">
              <motion.div
                className="bg-gradient-to-r from-purple to-purple h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${item.level}%` }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
            <div className="flex justify-between text-xs text-zinc-500 mt-1">
              <span>Beginner</span>
              <span>Expert</span>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

const TabButton = ({ active, id, label, onClick }: any) => {
  return (
    <motion.button
      onClick={() => onClick(id)}
      className={`px-4 py-2 mx-2 my-2 rounded-full transition-colors duration-300 ${
        active
          ? "text-white bg-purple/40 border border-purple/30"
          : "text-gray-400 bg-gray-800/80 hover:bg-gray-700 border border-transparent"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {label}
    </motion.button>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("web");

  return (
    <section id="skills" className="py-24 relative w-full px-6 overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b " />

      {/* Subtle animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(120, 50, 255, 0.15) 0%, rgba(0, 0, 0, 0) 50%)",
            "radial-gradient(circle at 80% 30%, rgba(120, 50, 255, 0.15) 0%, rgba(0, 0, 0, 0) 50%)",
            "radial-gradient(circle at 50% 70%, rgba(120, 50, 255, 0.15) 0%, rgba(0, 0, 0, 0) 50%)",
            "radial-gradient(circle at 20% 30%, rgba(120, 50, 255, 0.15) 0%, rgba(0, 0, 0, 0) 50%)"
          ]
        }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <TextGenerateEffect
            className="text-4xl md:text-5xl lg:text-5xl mb-6 font-bold"
            duration={0.6}
            words="My Tech Stack"
          />
          <motion.p
            className="max-w-2xl mx-auto text-zinc-300 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A comprehensive toolkit that enables me to build scalable, secure, and intelligent digital solutions.
          </motion.p>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex flex-wrap justify-center">
            {categories.map(category => (
              <TabButton
                key={category.id}
                id={category.id}
                label={category.label}
                active={activeCategory === category.id}
                onClick={setActiveCategory}
              />
            ))}
          </div>
        </div>

        {/* Skills grid with hover effect */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SkillHoverEffect items={skillsData[activeCategory]} />
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Skills;