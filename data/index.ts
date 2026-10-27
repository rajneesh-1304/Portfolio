export const RESUME_PATH = "./resume_rajneesh_kumar.pdf";
export const CONTACT_EMAIL = "kumarrajneesh1304@gmail.com";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Toolkit", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    category: "PERSONAL PROJECT",
    title: "Linkora",
    des: "A modern social media platform that enables users to connect with friends, share posts, follow people, and discover new communities through an engaging and interactive experience.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/rajneesh-1304/linkora",
    github: "https://github.com/rajneesh-1304/linkora",
  },
  {
    id: 2,
    category: "FULL-STACK APPLICATION",
    title: "Rydo",
    des: "A real-time video conferencing application that enables seamless virtual meetings, screen sharing, and collaboration, helping teams and individuals connect from anywhere.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    techStack: ["Next.js", "Stream SDK", "TypeScript", "Tailwind CSS", "WebRTC"],
    link: "https://github.com/rajneesh-1304/rydo",
    github: "https://github.com/rajneesh-1304/rydo",
  },
  {
    id: 3,
    category: "AI & SAAS PLATFORM",
    title: "Taskify",
    des: "An AI-powered image generation platform that transforms creative ideas into visuals, featuring intelligent image synthesis, background removal, credit-based usage, and secure payment integration.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe API", "Cloudinary"],
    link: "https://github.com/rajneesh-1304/taskify",
    github: "https://github.com/rajneesh-1304/taskify",
  },
  {
    id: 4,
    category: "ENTERPRISE PLATFORM",
    title: "Shipment Logistics Portal",
    des: "A high-performance logistics dashboard featuring end-to-end shipment tracking, automated delivery status workflows, responsive analytics charts, and REST API integration.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/dock.svg", "/git.svg"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Docker"],
    link: "https://github.com/rajneesh-1304",
    github: "https://github.com/rajneesh-1304",
  },
];

export const workExperience = [
  {
    id: 1,
    company: "Zenmonk",
    role: "Full Stack Developer Intern",
    duration: "Jan 2026 – Present",
    location: "Panchkula, India",
    type: "Internship",
    title: "Full Stack Developer Intern",
    desc: "Architecting real-time attendance platforms and scalable microservices with event-driven communication and multi-tenant schema isolation.",
    highlights: [
      "Built a QR-based attendance system with Server-Sent Events (SSE) for real-time sync, cutting manual tracking by ~70%.",
      "Engineered QR generation, GPS location validation, and duplicate-attendance prevention algorithms.",
      "Contributed to 4 NestJS microservices with RabbitMQ event-driven messaging and retry policies.",
      "Implemented multi-tenant data isolation using MikroORM and PostgreSQL schema-based separation.",
    ],
    skills: ["NestJS", "RabbitMQ", "MikroORM", "PostgreSQL", "SSE", "React.js", "TypeScript", "TDD"],
    className: "md:col-span-1",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    company: "Vectrium Ventures",
    role: "Full Stack Developer Intern",
    duration: "1-Month Internship",
    location: "India / Remote",
    type: "Internship",
    title: "Full Stack Developer Intern",
    desc: "Delivered responsive web features and reusable component architecture, accelerating frontend-backend integration and web performance.",
    highlights: [
      "Engineered responsive, mobile-first user interfaces using Next.js, React.js, and Tailwind CSS.",
      "Developed and optimized Node.js & TypeScript REST API endpoints, improving response latency.",
      "Built client-side state workflows and schema-validated forms for seamless user interaction.",
    ],
    skills: ["Next.js", "React.js", "TypeScript", "Node.js", "Tailwind CSS", "RESTful APIs"],
    className: "md:col-span-1",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    company: "SparkScale",
    role: "Full Stack Developer Intern",
    duration: "Apr 2025 – May 2025",
    location: "India",
    type: "Internship",
    title: "Full Stack Developer Intern",
    desc: "Developed backend REST APIs for an enterprise task management platform and integrated dynamic client-side tracking workflows.",
    highlights: [
      "Built resilient RESTful API services with Node.js and Express.js for full task lifecycle management.",
      "Integrated backend endpoints with a Next.js and TypeScript frontend for end-to-end task tracking.",
      "Implemented structured validation and centralized error handling across API endpoints.",
    ],
    skills: ["Node.js", "Express.js", "Next.js", "TypeScript", "REST APIs", "Zod"],
    className: "md:col-span-1",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/rajneesh-1304",
    name: "GitHub",
  },
  {
    id: 2,
    img: "/leetcode.png",
    link: "https://leetcode.com/rajneesh1304",
    name: "LeetCode",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rajneesh-kumar-5202122ab",
    name: "LinkedIn",
  },
];
