import { Icons } from "@/components/icons";
import { Figma, Github, HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { AWS } from "@/components/ui/svgs/aws";
import { Azure } from "@/components/ui/svgs/azure";
import { Html } from "@/components/ui/svgs/html";
import { Css } from "@/components/ui/svgs/css";
import { Javascript } from "@/components/ui/svgs/js";
import { Git } from "@/components/ui/svgs/gitt";
import { Selenium } from "@/components/ui/svgs/selenium";
import { Mongodb } from "@/components/ui/svgs/Mysql";

export const DATA = {
  name: "Soorajkrishna S",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Scaling systems, empowering users, and building in public",
  summary:
    "Dedicated Software Engineer with an MCA degree and a proven track record of building and deploying high-performance, real-world applications. I specialize in bridging the gap between complex backend logic and seamless user experiences through scalable code.",
  avatarUrl: "/me.JPG",
  skills: [
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "HTML", icon: Html },
    { name: "CSS", icon: Css },
    { name: "Javascript", icon: Javascript },
    { name: "Github", icon: Github },
    { name: "Git", icon: Git },
    { name: "Selenium", icon: Selenium },
    { name: "Azure", icon: Azure },
    { name: "Aws", icon: AWS },
    { name: "Figma", icon: Figma },
    { name: "Mysql", icon: Mongodb },
    { name: "Postgres", icon: Postgresql },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },

    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  
  ],
  contact: {
    email: "soorajzap@gmail.com",
    tel: "+7306786732",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/soorajzap",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sooraj-krishna-s/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:soorajzap@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Skeme Tech Private Limited",
      href: "https://www.skemetech.in/",
      badges: [],
      location: "Bangalore, India",
      title: "Software Engineer Intern (Remote)",
      logoUrl: "/skeme.jpg",
      start: "August 2025",
      end: "February 2026",
      description:
        "Spearheaded the development of full-stack web platforms and custom software solutions. Engineered IoT integrations for hardware-to-cloud communication and implemented AI-driven modules, including computer vision for security systems and automated voice-activated assistants.",
    },
    {
      company: "ByteBoot Techno Solutions Pvt Ltd",
      href: "https://www.byteboot.in/",
      badges: [],
      location: "Kochi, Kerala",
      title: "Software Engineering Intern",
      logoUrl: "/bb.png",
      start: "December 2023",
      end: "March 2024",
      description:
        "Developed scalable backend services using Python and Django, focusing on RESTful API design and database optimization. Integrated IoT protocols for real-time data ingestion and implemented AI-based automation modules, improving system efficiency for client-facing projects.",
    },
  ],
  education: [
    {
      school: "T. John College ",
      href: "https://tjohncollege.com/",
      degree: "Master of Computer Applications (MCA)",
      logoUrl: "/tj.jpg",
      start: "2024",
      end: "2026",
    },
    {
      school: "Christ Colege, Kattappana",
      href: "https://christcollegekattappana.in/",
      degree: "Bachelor of computer Applications (BCA)",
      logoUrl: "/cc.png",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "XP-Pilot",
      href: "https://github.com/soorajzap/XP-Pilot",
      dates: "Jan 2026 - Feb 2026",
      active: true,
      description:
        "XP-Pilot is an autonomous, event-driven development ecosystem designed to bridge the gap between silent coding errors and professional growth. It functions as a Human-in-the-Loop (HITL) orchestration layer that monitors your development environment in real-time and provides AI-powered interventions.",
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "TypeScript",
        "LangGraph",
        "OpenAI API",
        "Watchdog",
        "Docker",
        "Uvicorn",
      ],
      links: [
        {
          type: "AI Agent",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/2.png",
      video: "",
    },
    {
      title: "FluxoAI",
      href: "https://github.com/soorajzap/FluxoAI",
      dates: "Nov 2025 - Dec 2025",
      active: true,
      description:
        "FluxoAI is a Translation Layer for productivity. It takes a messy, natural language instruction from a user and converts it into precise, executable actions across different software services.",
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "OpenAI API",
        "SendGrid API",
        "WhatsApp Business API",
        "SQLAlchemy",
        "SQLite",
        "Uvicorn",
        "Python-dotenv",
      ],
      links: [
        {
          type: "Agentic Workflow",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/3.png",
      video: "",
    },
    {
      title: "Thilakkam Beutyland Ecommerce Webapp",
      href: "https://thilakkam.com/",
      dates: "Mar 2025 - jun 2025",
      active: true,
description:
  "A full-stack e-commerce platform developed using Python and Django for Thilakkam Beautyland, enabling seamless online cosmetic sales across Kerala with features like product management, secure payments, and order tracking.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Python",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "E-commerce Architecture",
        "Payment Gateway Integration",
        "Authentication & Authorization",
      ],
      links: [
        {
          type: "Full-Stack Development",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/4.png",
      video: "",
    },
    {
      title: "College Management System",
      href: "https://christcollegekattappana.in/",
      dates: "jan 2025 - Feb 2025",
      active: true,
     description:
            "A scalable college management system developed using HTML, CSS, JavaScript, and Django, streamlining student management, attendance tracking, fee payments, and academic operations, currently in active use by two colleges.",
      technologies: [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Python",
  "Django",
  "Django REST Framework",
  "PostgreSQL",
  "Authentication & Authorization",
  "Payment Gateway Integration"
],
      links: [
        {
          type: "Full stack Development",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/5.png",
      video: "",
    },
  ],
} as const;
