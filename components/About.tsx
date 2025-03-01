"use client";

import React from 'react';
import { motion } from "framer-motion";
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FloatingDock } from './ui/floating-dock';


const socialLink = [
  { icon: <FaGithub className="text-xl" />, href: "https://github.com/kishanvyas308", title: "GitHub Profile" },
  { icon: <FaLinkedin className="text-xl" />, href: "https://linkedin.com/in/kishanvyas308", title: "LinkedIn Profile" },
  { icon: <FaTwitter className="text-xl" />, href: "https://twitter.com/yourusername", title: "Twitter Profile" },
  { icon: <SiLeetcode className="text-xl" />, href: "https://leetcode.com/yourusername", title: "LeetCode Profile" },
  
]

const TimelineItem = ({ date, title, description, company, delay = 0 }: any) => {
  return (
    <motion.div
      className="mb-12 grid md:grid-cols-5 gap-4 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Timeline line */}
      <div className="md:col-span-1 relative">
        <div className="h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 absolute right-4 top-0" />
        <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center absolute right-0">
          <div className="bg-black w-4 h-4 rounded-full" />
        </div>
        <p className="text-right pr-12 font-medium text-zinc-400">{date}</p>
      </div>

      {/* Content */}
      <div className="md:col-span-4 bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800/80">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-purple-400 mb-3">{company}</p>
        <p className="text-zinc-400">{description}</p>
      </div>
    </motion.div>
  );
};

const SocialLink = ({ icon, href, label }: any) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 bg-zinc-900 hover:bg-purple-600 rounded-full transition-all duration-300"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
};

const About = () => {
  const timelineData = [
    {
      date: "2023 - Present",
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Ltd",
      description: "Leading the development of scalable web applications using Next.js, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers."
    },
    {
      date: "2021 - 2023",
      title: "Blockchain Developer",
      company: "Web3 Solutions",
      description: "Developed smart contracts and dApps for DeFi protocols. Created NFT marketplaces and token-gated applications with Solidity and React."
    },
    {
      date: "2019 - 2021",
      title: "Full-Stack Developer",
      company: "Digital Creatives",
      description: "Built responsive web applications with React, Express, and MongoDB. Optimized database queries and implemented real-time features using WebSockets."
    },
    {
      date: "2018 - 2019",
      title: "Frontend Developer Intern",
      company: "StartUp Hub",
      description: "Designed and implemented user interfaces for web applications. Collaborated with UX designers to create intuitive user experiences."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative dark:bg-dot-white/[0.18] bg-dot-black/[0.2] w-[100vw] overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="uppercase tracking-widest text-xs text-blue-100 mb-3">
            My Journey
          </h2>
          <TextGenerateEffect
            className="text-4xl md:text-5xl lg:text-5xl mb-6 font-bold"
            duration={0.6}
            words="About Me"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mb-20">
          {/* Profile Image */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-500/30 z-10" />
              <div className="w-full h-full relative">
                {/* Replace with your image */}
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                  {/* Placeholder for image */}
                  <div className="text-6xl text-zinc-700">
                    <FaFileAlt />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-4">Hy, I'm <span className='text-purple'> Kishan Vyas </span></h3>
            <p className="text-zinc-300 mb-6 text-lg">
              A passionate Full-Stack and Blockchain Developer with expertise in creating scalable web applications and decentralized solutions. I specialize in building secure, efficient, and user-friendly digital experiences that solve real-world problems.
            </p>
            <p className="text-zinc-400 mb-8">
              With over 2 years of experience in the tech industry, I've worked on various projects ranging from enterprise-level applications to cutting-edge blockchain solutions. I'm constantly exploring new technologies and methodologies to stay at the forefront of innovation.
            </p>

            <motion.div className="bg-zinc-900/50 cursor-pointer backdrop-blur-sm rounded-xl p-6 border border-purple/80 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h4 className="text-xl font-semibold mb-3">My Coding Philosophy</h4>
              <p className="text-zinc-400 italic">
                "Write code that is not just functional, but maintainable, scalable, and a joy to work with. Good architecture today saves countless hours tomorrow."
              </p>
            </motion.div>

            <div className="flex">
              <FloatingDock
                mobileClassName="" // only for demo, remove for production
                items={socialLink}
              />
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-10 text-center">My Professional Journey</h3>
          <div className="max-w-4xl mx-auto">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                company={item.company}
                description={item.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>

        {/* Interests & Hobbies */}
        <motion.div
          className="max-w-4xl mx-auto bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-6">Interests & Hobbies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4 bg-zinc-800/50 rounded-lg">
              <div className="text-3xl text-purple-400 mb-2">🚀</div>
              <h4 className="font-medium mb-1">Open Source</h4>
              <p className="text-zinc-400 text-sm text-center">Contributing to community projects</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-zinc-800/50 rounded-lg">
              <div className="text-3xl text-purple-400 mb-2">🏋️</div>
              <h4 className="font-medium mb-1">Fitness</h4>
              <p className="text-zinc-400 text-sm text-center">Staying healthy while coding</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-zinc-800/50 rounded-lg">
              <div className="text-3xl text-purple-400 mb-2">📚</div>
              <h4 className="font-medium mb-1">Reading</h4>
              <p className="text-zinc-400 text-sm text-center">Tech books and sci-fi novels</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6">Let's Build Something Amazing Together</h3>
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium hover:from-purple-700 hover:to-blue-600 transition-all duration-300 inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </div>
      </div>


    </section>
  );
};

export default About;