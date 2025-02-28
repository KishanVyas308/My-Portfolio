"use client";

import { projectList } from "@/data";
import { PinContainer } from "./ui/3d-pin";

import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "./ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationArrow, FaGithub, FaAppStore, FaGooglePlay, FaChrome, FaYoutube } from "react-icons/fa6";
import { RiTimeLine } from "react-icons/ri";

const Modal = ({ project, onClose }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClose]);

  if (!project) return null;

  // Helper function to determine project type
  const getProjectType = () => {
    // You can expand this logic based on your project data
    const technologies = project.iconLists.map((icon: string) => icon.split('/').pop()?.replace('.svg', ''));

    if (technologies.includes('three')) return 'Interactive 3D';
    if (technologies.includes('stream')) return 'Web App';
    if (technologies.includes('c')) return 'AI-Powered';
    return 'Web Development';
  };

  // Mock data for time period (you would add this to your project data)
  const projectPeriod = "Oct 2023 - Feb 2024";
  const projectType = getProjectType();
  const projectUrl = project.link || "#";
  const githubUrl = project.github || project.link || "#";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          ref={ref}
          className="bg-[#13162d] border border-slate-700 rounded-xl w-[90vw] max-w-6xl max-h-[90vh] relative overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header with close button */}
          <div className="flex justify-between items-center p-4 border-b border-slate-700">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-purple-500"></span>
              <h2 className="text-2xl font-bold">{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="rounded-full h-8 w-8 flex items-center justify-center bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <span className="sr-only">Close</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>

          <div className="flex flex-col md:flex-row h-[calc(90vh-64px)]">
            {/* Left side - Image carousel */}
            <div className="md:w-3/5 border-r border-slate-700 relative">
              <div className="h-full overflow-hidden">
                <Carousel slides={project.img} />
              </div>

              {/* Project type badge */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-700 text-xs">
                {projectType}
              </div>
            </div>

            {/* Right side - Project info */}
            <div className="md:w-2/5 flex flex-col h-full overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-slate-700">
                <div className={`border border-b-2 border-x-0 border-t-0 ${activeTab === 'overview' && " border-purple"}`}>

                  <motion.button
                    className={`px-4 py-3 text-sm font-medium hover:text-purple ${activeTab === 'overview' ? 'text-purple border-purple' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('overview')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Overview
                  </motion.button>

                </div>
                <div className={`border border-b-2 border-x-0 border-t-0 ${activeTab === 'tech' && " border-purple"}`}>

                  <motion.button
                    className={`px-4 py-3 text-sm font-medium hover:text-purple ${activeTab === 'tech' ? 'text-purple-400  border-purple-400' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('tech')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Technologies
                  </motion.button>
                </div>
                <div className={`border border-b-2 border-x-0 border-t-0 ${activeTab === 'features' && " border-purple"}`}>
                  <motion.button
                    className={`px-4 py-3 text-sm font-medium hover:text-purple ${activeTab === 'features' ? 'text-purple-400 border-purple-400' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('features')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Features
                  </motion.button>
                </div>
              </div>

              {/* Content based on active tab */}
              <div className="flex-1 overflow-y-auto p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <RiTimeLine />
                      <span className="text-sm">{projectPeriod}</span>
                    </div>

                    <p className="text-lg leading-relaxed">{project.des[0]}</p>

                    <p className="text-gray-400">{
                      project.des[1] ? project.des[1] : ""}
                    </p>

                    <div className="pt-4">
                      <h3 className="text-lg font-medium mb-3">Project Links</h3>
                      <div className="flex flex-wrap gap-4">
                        {project.links.map((data: any, index: number) => (
                          <a
                            key={index}
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-purple/5 hover:bg-purple/20 transition-colors px-4 py-2 rounded-lg border border-purple w-full sm:w-auto"
                          >
                            <div className="flex items-center justify-center w-6 h-6">
                              {data.name === "Live Demo" && <FaLocationArrow color="#CBACF9" />}
                              {data.name === "Source Code" && <FaGithub color="#fff" />}
                              {data.name === "Play Store" && <FaGooglePlay color="#34A853" />}
                              {data.name === "YouTube" && <FaYoutube color="#FF0000" />}
                            </div>
                            <span className="text-white">{data.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'tech' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium mb-4">Technologies Used</h3>

                    <div className="grid grid-cols-2 gap-4">
                      {project.iconLists.map((icon: string, index: number) => {
                        const tech = icon.split('/').pop()?.replace('.svg', '');
                        return (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg border border-slate-800">
                            <div className="w-10 h-10 flex items-center justify-center bg-black rounded-full border border-slate-700">
                              <img src={icon} alt={tech} className="w-6 h-6" />
                            </div>
                            <span className="capitalize">{techNames[tech as keyof typeof techNames] || tech}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-4">
                      <h3 className="text-lg font-medium mb-3">Architecture</h3>
                      <p className="text-gray-400">
                        {project.architecture}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium mb-2">Key Features</h3>

                    <ul className="space-y-3">
                      {project.keyFeatures.map((data: string, i: number) => (
                        <li className="flex items-start  space-x-2">
                          <span className="text-purple-400">•</span>
                          <span>{data}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4">
                      <h3 className="text-lg font-medium mb-3">Target Platforms</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">Web</span>
                        {projectType.includes('App') && (
                          <>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">iOS</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">Android</span>
                          </>
                        )}
                        {projectType === 'Interactive 3D' && (
                          <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">Desktop</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer with tech stack */}
              <div className="border-t border-slate-700 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {project.iconLists.slice(0, 5).map((icon: string, index: number) => (
                      <div
                        key={index}
                        className="border border-white/[0.2] rounded-full bg-black w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>

                  {projectType === 'Web App' && (
                    <div className="flex space-x-2">
                      <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                        <FaGooglePlay size={16} />
                      </a>
                      <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                        <FaAppStore size={16} />
                      </a>
                    </div>
                  )}
                  {projectType.includes('Extension') && (
                    <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                      <FaChrome size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Map tech abbreviations to full names
const techNames = {
  re: "React",
  tail: "Tailwind CSS",
  ts: "TypeScript",
  three: "Three.js",
  fm: "Framer Motion",
  next: "Next.js",
  stream: "Stream API",
  c: "Cloudinary",
  gsap: "GSAP Animation"
};


const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState(projectList[0].category);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const filteredProjects = projectList.find(
    (category) => category.category === activeCategory
  )?.projects;

  const totalNumberOfProjects = () => {
    return projectList.reduce((acc, category) => acc + category.projects.length, 0);
  }

  return (
    <section id="projects">
      <div className="py-20 lg:px-20">
        <h1 className="heading text-center">
          A representation of my {" "}
          <span className="text-purple">All {totalNumberOfProjects()} projects</span>
        </h1>

        <div className="flex flex-wrap  justify-center mt-10">
          {projectList.map((category) => (
            <motion.button
              key={category.category}
              className={`px-4 py-2 mx-2 my-2 rounded-full transition-colors duration-300 ${activeCategory === category.category
                ? "text-white bg-purple/40"
                : "text-gray-400 bg-gray-800 hover:bg-gray-700"
                }`}
              onClick={() => handleCategoryClick(category.category)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {category.category}{" "}
              <span className="ml-1 text-sm font-bold text-gray-300">
                {category.projects.length}
              </span>
            </motion.button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center p-4 lg:gap-16 md:gap-12 sm:gap-8  mt-10">
          {filteredProjects?.map((project) => (
            <motion.div
              key={project.id}
              className="lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-center sm:w-96 w-[80vw]"
              onClick={() => handleProjectClick(project)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <PinContainer title={"More Detail "} href={""}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img
                      src="/bg.png"
                      alt="bg img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <img
                    src={project.img[0]}
                    alt={project.title}
                    className="z-10 absolute bottom-0 rounded-b-3xl "
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-center">
                  {project.title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-center">
                  {project.des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3 w-full">
                  <div className="flex items-center">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-warp justify-center items-center">
                    {project.supported.map((data, i) => (
                      <span className="px-3 py-2 bg-slate-800 rounded-full text-sm">{data}</span>
                    ))}
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </div>
      </div>
      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default RecentProjects;