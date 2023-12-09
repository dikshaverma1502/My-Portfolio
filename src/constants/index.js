import { list } from "postcss";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    litsoc,
    unesco,
    unseco2,
    aiitra,
    nintendo,
    caption,
    market,
    reselling,
    ted,
  } from "../assets";

  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Web3 Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "FrontEnd Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Coordinator",
      company_name: "All IIT Robotics Association (AIITRA)",
      icon: aiitra,
      iconBg: "#FFFFFF",
      date: "May 2021- Nov 2021",
      points: [
        "Collaborated with the cross-functional teams to conduct All IIT Robotics Hackathon 2021.",
        "Developed a comphresensive proposal letter to identify and approach potential sponsors for the Hackathon.",
        "Implemented responsive design and market strategies to increase the reach and presence of the Hackathon.",
      ],
    },
    {
      title: "Editor",
      company_name: "Brahmaputra Water Diplomacy Group | UNESCO",
      icon: unesco,
      iconBg: "#FFFFFF",
      date: "Jun 2021 - Nov 2021",
      points: [
        "Edited engaging and informative content for various social media platforms.",
        "Collaborated with writers and subject matter experts to create high quality audio-visual content.",
        "Implemented editorial strategies to enhance the overall quality and consistency of content.",
      ],
    },
    {
      title: "Organizer",
      company_name: "TedxIITGuwahati 2022",
      icon: ted,
      iconBg: "#FFFFFF",
      date: "March 2021 - Jan 2022",
      points: [
        "Collaborated closely with a dynamic team of volunteers to ensure the seamless execution of the event.",
        "Created compelling and educational content for diverse social media channels.",
        "Teamed up with writers and subject matter experts to produce motion design content.",
      ],
    },
    {
      title: "Secretary",
      company_name: "Lit-Soc IIT Guwahati",
      icon: litsoc,
      iconBg: "#FFFFFF",
      date: "April 2022 - March 2023",
      points: [
        "Organized and executed first Literary Festival, Aakhar’23 under Cultural Board IIT Guwahati with a budget of Rs.1,10,000.",
        "Led the Inter IIT contingent for Literary module to the Top 3 positions in Inter IIT Cultural Meet’23.",
        "Led Lit-Soc team to the best club of Cultural Board, Student’s Gymkhana IIT Guwahati 2023.",
        "Successfully hosted various literary events extending invitations to 15+ prominent poets and authors of different genres.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "UNSECO | IHE",
      icon: unseco2,
      iconBg: "#FFFFFF",
      date: "June 2023 - August 2023",
      points: [
        "Developed the group’s project website with a content management system, supporting 7 international research and media nodes.",
        "Integrated the dynamic front-end structure with backend runtime for the consortium’s website hosted at trans-path-plan.com.",
        "Implemented responsive design and ensured cross-browser compatibility.",
        "Participated in code reviews and provided constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Automated Market Maker",
      description:
        "A novel Web3 protocol that facilitates decentralized token swaps and provides liquidity to trading pairs within a trustless ecosystem.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "TaquitoJs",
          color: "green-text-gradient",
        },
        {
          name: "SmartPy",
          color: "pink-text-gradient",
        },
      ],
      image: market,
      source_code_link: "https://github.com/nkshash/ipfs",
    },
    {
      name: "Video Caption Generator",
      description:
        "A Web application that converts videos to audio using a Python Data Model with the ability to manually add or edit comments at specific timestamps.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: caption,
      source_code_link: "https://github.com/nkshash/Audify",
    },
    {
      name: "Nintendo NES Emulator",
      description:
        "A comprehensive implementation of a tailored version of 6502 microprocessor architechture for emulating the Nintendo Entertainment System in C++.",
      tags: [
        {
          name: "cpp",
          color: "blue-text-gradient",
        },
        {
          name: "cmake",
          color: "green-text-gradient",
        },
        {
          name: "oops",
          color: "pink-text-gradient",
        },
      ],
      image: nintendo,
      source_code_link: "https://github.com/dikshaverma1502/NES-Emulator",
    },
    {
      name: "P2P Reselling Platform",
      description:
        "A Full Stack P2P Reselling Platform that facilitates reselling of pre-owned items in a user-friendly and secure online marketplace.",
      tags: [
        {
          name: "web",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: reselling,
      source_code_link: "https://github.com/dikshaverma1502/ResellingPlatform",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };