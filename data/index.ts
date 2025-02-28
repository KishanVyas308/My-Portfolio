export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projectList = [
  {
    category: "Learning Based Projects",
    projects: [
      {
        id: 1,
        title: "Weather App",
        des: [
          "A dynamic weather app powered by real-time weather APIs, providing forecasts for every city across India.",
        ],
        img: ["/weather.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/flutter.png",
          "https://img.icons8.com/color/48/000000/dart.png",
        ],
        links: [
          { name: "GitHub", link: "", icon: "<FaGithub />" },
          { name: "LinkedIn", link: "", icon: "<FaLinkedin />" },
        ],
        techStack: ["Flutter", "Dart", "Weather API"],
        duration: "Sep 2023 - Sep 2023",
        supported: ["App"],
        architecture: "Client-Server",
        keyFeatures: ["Real-time weather updates", "City-based forecasts"],
      },
      {
        id: 2,
        title: "Shoes UI",
        des: ["A sleek and modern shoes app UI design built in Flutter."],
        img: ["/shoes.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/flutter.png",
          "https://img.icons8.com/color/48/000000/dart.png",
        ],
        links: [
          { name: "GitHub", link: "", icon: "<FaGithub />" },
          { name: "LinkedIn", link: "", icon: "<FaLinkedin />" },
        ],
        techStack: ["Flutter", "Dart"],
        duration: "Sep 2023 - Oct 2023",
        supported: ["App"],
        architecture: "Client-Server",
        keyFeatures: ["Modern UI design", "Responsive layout"],
      },
      {
        id: 3,
        title: "Todo UI",
        des: ["A simple To-Do app with animations and smooth UI."],
        img: ["/todo.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/flutter.png",
          "https://img.icons8.com/color/48/000000/dart.png",
        ],
        techStack: ["Flutter", "Dart"],
        duration: "Dec 2023 - Jan 2024",
        supported: ["App"],
        architecture: "Client-Server",
        keyFeatures: ["Animations", "Smooth UI"],
      },
      {
        id: 4,
        title: "MIMO Learning Clone",
        des: [
          "A UI/UX clone of the Mimo Learning Platform built with modern frontend technologies.",
        ],
        img: ["/mimo.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/react-native.png",
          "https://img.icons8.com/color/48/000000/tailwind-css.png",
          "https://img.icons8.com/color/48/000000/mongodb.png",
          "https://img.icons8.com/color/48/000000/firebase.png",
        ],
        techStack: ["React.js", "Tailwind CSS", "MongoDB", "Firebase"],
        duration: "Feb 2024 - Feb 2024",
        supported: ["Web"],
        architecture: "Client-Server",
        keyFeatures: ["UI/UX clone", "Responsive design"],
      },
      {
        id: 5,
        title: "AI-Mini-Projects",
        des: [
          "A collection of AI-based mini projects demonstrating various AI algorithms and techniques.",
          "1. Tic Tac Toe with AI – A GUI-based Tic Tac Toe game with an AI opponent using the Minimax algorithm for optimal moves.",
          "2. Maze Search Algorithms – Implementation of DFS and BFS to solve mazes, with a visualized solution path.",
        ],
        img: ["/ai-mini-projects.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/python.png",
        ],
        links: [{ name: "GitHub", link: "", icon: "<FaGithub />" }],
        techStack: ["Python", "Tkinter", "NumPy", "Matplotlib", "Minimax", "DFS", "BFS"],
        duration: "Jan 2025 - Jan 2025",
        supported: ["Desktop"],
        architecture: "Standalone",
        keyFeatures: ["AI algorithms", "GUI-based games"],
      },
      {
        id: 6,
        title: "Real Time Age And Gender Recognition",
        des: [
          "A real-time age and gender detection system using OpenCV's deep learning module with a pre-trained Caffe model.",
        ],
        img: ["/age-gender-recognition.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/python.png",
        ],
        links: [{ name: "GitHub", link: "", icon: "<FaGithub />" }],
        techStack: ["Python", "OpenCV", "NumPy", "Pre-trained Caffe models"],
        duration: "Jan 2025 - Jan 2025",
        supported: ["Desktop"],
        architecture: "Standalone",
        keyFeatures: ["Real-time detection", "High accuracy"],
      },
    ],
  },
  {
    category: "Projects",
    projects: [
      {
        id: 7,
        title: "Quiztical",
        des: [
          "A versatile quiz management platform with seamless authentication, dynamic dashboards, and post-quiz analytics.",
        ],
        img: ["/quiz.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/react-native.png",
          "https://img.icons8.com/color/48/000000/typescript.png",
          "https://img.icons8.com/color/48/000000/firebase.png",
        ],
        links: [{ name: "Live Demo", link: "", icon: "<FaLocationArrow />" }],
        techStack: ["React", "TypeScript", "Material-UI", "Recoil", "Firebase", "Cloudflare"],
        duration: "Jun 2024 - Jul 2024",
        supported: ["Web"],
        architecture: "Client-Server",
        keyFeatures: ["Seamless authentication", "Dynamic dashboards", "Post-quiz analytics"],
      },
      {
        id: 8,
        title: "BlogIt",
        des: [
          "A full-stack blogging website supporting robust content management, real-time blogging, and database optimization.",
        ],
        img: ["/blogit.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/react-native.png",
          "https://img.icons8.com/color/48/000000/typescript.png",
          "https://img.icons8.com/color/48/000000/postgreesql.png",
          "https://img.icons8.com/color/48/000000/nodejs.png",
        ],
        links: [{ name: "GitHub", link: "", icon: "<FaGithub />" }],
        techStack: ["React", "TypeScript", "Material-UI", "PostgreSQL", "Prisma", "Docker", "Express", "Node.js"],
        duration: "Jun 2024 - Jul 2024",
        supported: ["Web"],
        architecture: "Client-Server",
        keyFeatures: ["Robust content management", "Real-time blogging", "Database optimization"],
      },
      {
        id: 9,
        title: "MU-Faculty-Review-Extension",
        des: [
          "A Chrome extension that automates Marwadi University faculty and warden feedback submission, saving time and effort.",
        ],
        img: ["/mu-faculty-review.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/html-5.png",
          "https://img.icons8.com/color/48/000000/javascript.png",
        ],
        techStack: ["HTML", "JavaScript"],
        duration: "Feb 2025 - Feb 2025",
        supported: ["Extension"],
        architecture: "Client-Server",
        keyFeatures: ["One-click automation", "User-friendly interface"],
      },
    ],
  },
  {
    category: "Major Projects",
    projects: [
      {
        id: 10,
        title: "Decentralized Drive",
        des: [
          "A secure and decentralized file storage solution allowing users to upload, manage, and share files with privacy and security.",
        ],
        img: ["/decentralized_drive.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/react-native.png",
          "https://img.icons8.com/color/48/000000/web3.png",
          "https://img.icons8.com/color/48/000000/ipfs.png",
        ],
        links: [{ name: "GitHub", link: "", icon: "<FaGithub />" }],
        techStack: ["React.js", "Tailwind CSS", "Sepolia (Testnet)", "Remix (Solidity Smart contract)", "Web3JS", "EtherJS", "IPFS (Pinata)", "Blockchain", "Firebase"],
        duration: "Mar 2024 - Mar 2024",
        supported: ["Web"],
        architecture: "Decentralized",
        keyFeatures: ["Secure file storage", "Privacy and security"],
      },
      {
        id: 11,
        title: "Real-Time Collaborative Code Editor",
        des: [
          "A real-time collaborative coding platform enabling multiple users to edit, run, and execute code simultaneously with instant synchronization.",
        ],
        img: ["/collaborative_code_editor.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/react-native.png",
          "https://img.icons8.com/color/48/000000/typescript.png",
          "https://img.icons8.com/color/48/000000/nodejs.png",
          "https://img.icons8.com/color/48/000000/websocket.png",
          "https://img.icons8.com/color/48/000000/redis.png",
        ],
        links: [{ name: "GitHub", link: "", icon: "<FaGithub />" }],
        techStack: ["React", "TypeScript", "Node.js", "WebSocket", "Redis", "Turbo Repo", "Docker"],
        duration: "Sep 2024 - Nov 2024",
        supported: ["Web"],
        architecture: "Client-Server",
        keyFeatures: ["Real-time collaboration", "Low-latency communication", "Scalable backend"],
      },
    ],
  },
  {
    category: "Internship Experience",
    projects: [
      {
        id: 12,
        title: "Udhyog4O",
        des: [
          "Developed a scalable platform for managing user data & processes, optimizing real-time data communication and deployment.",
        ],
        img: ["/udhyog.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/react-native.png",
          "https://img.icons8.com/color/48/000000/typescript.png",
          "https://img.icons8.com/color/48/000000/nodejs.png",
          "https://img.icons8.com/color/48/000000/prisma.png",
        ],
        techStack: ["React", "TypeScript", "Node.js", "WebSocket", "Prisma", "MySQL", "GoDaddy", "Certbot", "Nginx"],
        duration: "Aug 2024 - Feb 2025",
        supported: ["Web", "Deployment"],
        architecture: "Client-Server",
        keyFeatures: ["Real-time data communication", "Scalable platform", "Secure deployment"],
      },
    ],
  },
  {
    category: "Freelance Projects",
    projects: [
      {
        id: 13,
        title: "Shashvat Enterprise",
        des: [
          "A web solution for a brass industry company featuring product showcases, user reviews, and admin panel management.",
        ],
        img: ["/shashvat.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/react-native.png",
          "https://img.icons8.com/color/48/000000/firebase.png",
        ],
        links: [{ name: "Client Website", link: "shashvatenterprise.com", icon: "<FaLocationArrow />" }],
        techStack: ["React", "Tailwind CSS", "Material-UI", "Firebase", "Cloudflare", "GoDaddy"],
        duration: "Jun 2024 - Feb 2025",
        supported: ["Web"],
        architecture: "Client-Server",
        keyFeatures: ["Product showcases", "User reviews", "Admin panel management"],
      },
      {
        id: 14,
        title: "Dasharam",
        des: [
          "A complete digital solution for schools to manage students, teachers, attendance, and tests efficiently.",
        ],
        img: ["/dasharam.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/react-native.png",
          "https://img.icons8.com/color/48/000000/nodejs.png",
          "https://img.icons8.com/color/48/000000/typescript.png",
          "https://img.icons8.com/color/48/000000/firebase.png",
          "https://img.icons8.com/color/48/000000/flutter.png",
        ],
        links: [{ name: "GitHub", link: "", icon: "<FaGithub />" }],
        techStack: ["React", "TypeScript", "Recoil", "Node.js", "Express", "Firebase", "JWT", "Render", "Flutter", "Dart", "Hive (local storage)", "Firebase Messaging Service"],
        duration: "Nov 2024 - Jan 2025",
        supported: ["Web", "App"],
        architecture: "Client-Server",
        keyFeatures: ["Student management", "Teacher management", "Attendance tracking", "Test management"],
      },
    ],
  },
  {
    category: "Hackathons / Hacker House - Projects",
    projects: [
      {
        id: 15,
        title: "Crop Yard",
        des: [
          "An Android app enabling farmers to sell crops directly to buyers with detailed listings and geolocation services, empowering farmers and promoting local agriculture.",
        ],
        img: ["/crop_yard.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/android-os.png",
          "https://img.icons8.com/color/48/000000/firebase.png",
        ],
        links: [{ name: "GitHub", link: "", icon: "<FaGithub />" }],
        techStack: ["Android (Java, XML)", "Firebase"],
        duration: "Mar 2023",
        supported: ["Android"],
        architecture: "Client-Server",
        keyFeatures: ["Crop listings", "Geolocation services"],
      },
      {
        id: 16,
        title: "Secure Single-Click Identity Verification using zk-SNARKs and MPC",
        des: [
          "A decentralized identity verification system that enables single-click, privacy-preserving KYC using zk-SNARKs and Multi-Party Computation (MPC).",
        ],
        img: ["/zkid.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/react-native.png",
          "https://img.icons8.com/color/48/000000/solidity.png",
          "https://img.icons8.com/color/48/000000/circom.png",
          "https://img.icons8.com/color/48/000000/nodejs.png",
        ],
        links: [{ name: "GitHub", link: "", icon: "<FaGithub />" }],
        techStack: ["React", "Solidity", "Circom", "Node.js"],
        duration: "Sep 2024",
        supported: ["Web"],
        architecture: "Decentralized",
        keyFeatures: ["Privacy-preserving KYC", "zk-SNARKs", "MPC"],
      },
      {
        id: 17,
        title: "AggreNet - Starknet Bridge Aggregator",
        des: [
          "A cross-chain bridge aggregator on Starknet, optimizing token transfers by integrating multiple bridges into a unified interface.",
        ],
        img: ["/aggrenet.svg"],
        iconLists: [
          "https://img.icons8.com/color/48/000000/react-native.png",
          "https://img.icons8.com/color/48/000000/nodejs.png",
          "https://img.icons8.com/color/48/000000/starknet.png",
          "https://img.icons8.com/color/48/000000/cairo.png",
        ],
        links: [
          { name: "GitHub", link: "", icon: "<FaGithub />" },
          { name: "YouTube", link: "", icon: "<FaYoutube />" },
        ],
        techStack: ["React", "Node.js", "Starknet.js", "Cairo", "Web3", "Smart Contracts", "API Integration"],
        duration: "Dec 2024",
        supported: ["Web"],
        architecture: "Decentralized",
        keyFeatures: ["Cross-chain bridge aggregation", "Optimized token transfers"],
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
