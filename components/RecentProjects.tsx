"use client";

import { projectList } from "@/data";
import { PinContainer } from "./ui/3d-pin";

import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "./ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationArrow, FaGithub, FaAppStore, FaGooglePlay, FaChrome, FaYoutube } from "react-icons/fa6";
import { RiTimeLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";


// Add TypeScript interfaces for better type safety
interface ProjectLink {
  name: string;
  link: string;
}

interface Project {
  id: string;
  title: string;
  img: string[];
  des: string[];
  iconLists: string[];
  links: ProjectLink[];
  keyFeatures: string[];
  architecture?: string;
  duration?: string;
  type: string;
  supported: string[];
}

interface TechNameMap {
  [key: string]: string;
}

interface ModalProps {
  project: Project | null;
  onClose: () => void;
  isOpen: boolean;
}

interface TabButtonProps {
  active: boolean;
  label: string;
  onClick: () => void;
  icon: React.ReactNode;
}

const TabButton = ({ active, label, onClick, icon }: TabButtonProps) => (
  <motion.button
    className={`
      flex items-center gap-2 px-4 py-3 text-sm font-medium
      border-b-2 border-transparent
      transition-colors duration-200
      ${active ? 'text-purple border-purple' : 'text-gray-400 hover:text-gray-300 hover:border-gray-700'}
    `}
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {icon}
    <span>{label}</span>
  </motion.button>
);

// Tech badge component for reusability
const TechBadge = ({ icon, name }: { icon: string; name: string }) => (
  <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg border border-slate-800 hover:border-purple-800 transition-colors">
    <div className="w-10 h-10 flex items-center justify-center bg-black/50 rounded-full border border-slate-700">
      <img src={icon} alt={name} className="w-6 h-6" />
    </div>
    <span className="capitalize text-sm">{techNames[name] || name}</span>
  </div>
);

export function ProjectModal({ project, onClose, isOpen }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoaded, setIsLoaded] = useState(false);


  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden";

      // Set loaded state after animation completes
      setTimeout(() => setIsLoaded(true), 300);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  // Project data
  const projectType = project.type || "Project";
  const projectPeriod = project.duration || "2023 - 2024";

  // Handle tab switching with keyboard
  const handleKeyDown = (event: React.KeyboardEvent, tabName: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setActiveTab(tabName);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            ref={modalRef}
            className="bg-[#13162d] border border-slate-700 rounded-xl w-[95vw] max-w-6xl max-h-[90vh] relative overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            role="dialog"
            aria-labelledby="project-modal-title"
            aria-modal="true"
          >
            {/* Header with close button */}
            <div className="flex justify-between items-center p-4 border-b border-slate-700 sticky top-0 z-10 bg-[#13162d]/90 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <span className="h-3 w-3 rounded-full bg-purple-500"></span>
                <h2 id="project-modal-title" className="text-xl md:text-2xl font-bold truncate">{project.title}</h2>
              </div>
              <motion.button
                onClick={onClose}
                className="rounded-full h-9 w-9 flex items-center justify-center bg-slate-800 hover:bg-slate-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close modal"
              >
                <IoClose size={18} />
              </motion.button>
            </div>

            <div className="flex flex-col lg:flex-row h-[calc(90vh-4rem)]">
              {/* Left side - Image carousel */}
              <div className="lg:w-3/5 border-b lg:border-b-0 lg:border-r border-slate-700 relative">
                <div className="h-[40vh] md:h-[50vh] lg:h-full overflow-hidden">
                  {isLoaded && (
                    <Carousel
                      slides={project.img}
                      autoPlay={true}
                      autoPlayInterval={2000}
                    />
                  )}
                </div>

                {/* Project type badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-700 text-xs font-medium">
                  {projectType}
                </div>
              </div>

              {/* Right side - Project info */}
              <div className="lg:w-2/5 flex flex-col h-[calc(90vh-40vh-4rem)] md:h-[calc(90vh-50vh-4rem)] lg:h-full overflow-hidden">
                {/* Tabs */}
                <div className="flex overflow-x-auto border-b border-slate-700 scrollbar-hide">
                  <TabButton
                    active={activeTab === 'overview'}
                    label="Overview"
                    onClick={() => setActiveTab('overview')}
                    icon={<RiTimeLine size={16} />}
                  />
                  <TabButton
                    active={activeTab === 'tech'}
                    label="Technologies"
                    onClick={() => setActiveTab('tech')}
                    icon={<FaGithub size={14} />}
                  />
                  <TabButton
                    active={activeTab === 'features'}
                    label="Features"
                    onClick={() => setActiveTab('features')}
                    icon={<FaLocationArrow size={12} />}
                  />
                </div>

                {/* Content based on active tab */}
                <div
                  className="flex-1 overflow-y-auto p-4 md:p-6"
                  tabIndex={0}
                  role="tabpanel"
                  aria-labelledby={`tab-${activeTab}`}
                >
                  {activeTab === 'overview' && (
                    <motion.div
                      className="space-y-5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center space-x-2 text-gray-400">
                        <RiTimeLine />
                        <span className="text-sm">{projectPeriod}</span>
                      </div>

                      <p className="text-base md:text-lg leading-relaxed">{project.des[0]}</p>

                      {project.des[1] && (
                        <p className="text-gray-400 text-sm md:text-base">{project.des[1]}</p>
                      )}

                      <div className="pt-4">
                        <h3 className="text-lg font-medium mb-3">Project Links</h3>
                        <div className="flex flex-wrap gap-3">
                          {project.links.map((data, index) => (
                            <motion.a
                              key={index}
                              href={data.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 bg-purple/10 hover:bg-purple/20 transition-colors px-4 py-2 rounded-lg border border-purple/30 hover:border-purple"
                              whileHover={{ y: -2, boxShadow: "0 5px 10px rgba(0,0,0,0.2)" }}
                              whileTap={{ y: 0 }}
                            >
                              <div className="flex items-center justify-center w-5 h-5">
                                {data.name === "Live Demo" && <FaLocationArrow color="#CBACF9" />}
                                {data.name === "GitHub" && <FaGithub color="#fff" />}
                                {data.name === "LinkedIn" && <FaLinkedinIn color="#0077B5" />}
                                {data.name === "Play Store" && <FaGooglePlay color="#34A853" />}
                                {data.name === "YouTube" && <FaYoutube color="#FF0000" />}
                                {data.name === "App Store" && <FaAppStore color="#0066CC" />}
                              </div>
                              <span className="text-white text-sm">{data.name}</span>
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'tech' && (
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-lg font-medium mb-4">Technologies Used</h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.iconLists.map((data : any, index) => {
                      
                          return (
                            <TechBadge key={index} icon={data.icon} name={data.title} />
                          );
                        })}
                      </div>

                      {project.architecture && (
                        <div className="pt-4">
                          <h3 className="text-lg font-medium mb-3">Architecture</h3>
                          <p className="text-gray-400 text-sm md:text-base">
                            {project.architecture}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === 'features' && (
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-lg font-medium mb-3">Key Features</h3>

                      <ul className="space-y-3">
                        {project.keyFeatures.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start space-x-3 rounded-lg hover:bg-purple-500/5 transition-colors"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <span className="text-purple-400 ">•</span>
                            <span className="text-sm md:text-base">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="pt-4">
                        <h3 className="text-lg font-medium mb-3">Target Platforms</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.supported.map((platform, index) => (
                            <span key={index} className="px-3 py-1 bg-slate-800 rounded-full text-xs">{platform}</span>))}

                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Footer with tech stack */}
                <div className="border-t border-slate-700 p-4 bg-[#0f1224]/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {project.iconLists.slice(0, 5).map((data: any, index) => (
                        <motion.div
                          key={index}
                          className="border border-white/20 rounded-full bg-black w-8 h-8 flex justify-center items-center"
                          style={{ marginLeft: index > 0 ? "-8px" : "0" }}
                          whileHover={{ y: -5, zIndex: 10 }}
                        >
                          <img src={data.icon} alt={data.title} className="p-1.5" />
                        </motion.div>
                      ))}
                      {project.iconLists.length > 5 && (
                        <div className="border border-white/20 rounded-full bg-black w-8 h-8 flex justify-center items-center ml-[-8px]">
                          <span className="text-xs text-gray-400">+{project.iconLists.length - 5}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      {project.links.map((link, index) => {
                        if (link.name === "Source Code") {
                          return (
                            <motion.a
                              key={index}
                              href={link.link}
                              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label="View source code"
                            >
                              <FaGithub size={16} />
                            </motion.a>
                          );
                        }
                        if (link.name === "Live Demo") {
                          return (
                            <motion.a
                              key={index}
                              href={link.link}
                              className="p-2 rounded-full bg-purple-800/50 hover:bg-purple-800 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label="View live demo"
                            >
                              <FaLocationArrow size={16} />
                            </motion.a>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
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
              whileHover={{ scale: 1.05 }}
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
                    className="z-10 absolute bottom-0 h-full "
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-center">
                  {project.title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-center">
                  {project.des[0]}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3 w-full">
                  <div className="flex items-center">
                    {project.iconLists.map((data :any, index) => (
                      <div
                        key={data.title}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={data.icon} alt={data.title} className="p-2" />
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
      <ProjectModal isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default RecentProjects;