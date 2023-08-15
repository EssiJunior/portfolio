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
    java,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    kotlin,
    recho,
    portfolio,
    bus,
    estate,
    ps
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Desktop Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
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
      name: "Docker",
      icon: docker,
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
    // {
    //   name: "Kotlin",
    //   icon: kotlin,
    // },
    {
      name: "Java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "Python Developer",
      company_name: "Personal, For individuals, Powerk-soft, Pro service",
      // icon: shopify,
      // iconBg: "#383E56",
      date: "Since - Sept 2021",
      points: [
        "Developing and maintaining, fullstack desktop (Tkinter and related) and backend web applications (FastAPI and related).",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Android Developer",
      company_name: "Personal, For individuals",
      // icon: shopify,
      // iconBg: "#383E56",
      date: "Since - July 2022",
      points: [
        "Developing and maintaining, fullstack android application using Kotlin and related technologies.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Powerk-soft, Pro service",
      // icon: starbucks,
      // iconBg: "#383E56",
      date: "Since - Oct 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Beside the work done in these companies, some of my realisations were for individuals."
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Personal",
      date: "Since - Nov 2022",
      points: [
        "Developing mobile cross-platform applications using React Native and other related technologies.",
        "In some projects teams with friends including designers and other developers to create high-quality products, one of those was presented at the 2022 Github Hackaton.",
      ],
    },
    {
      title: "Electron.js Developer",
      company_name: "Powerk-soft",
      date: "Since - July 2023",
      points: [
        "Developing and maintaining desktop applications using Electron.js.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-platform compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "My Portfolio",
      description:
        "Website presenting me, my works and my experience in my developper life. This will indeed open this site again.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      demo_link: "https://essijunior-portfolio.vercel.app/",
    },
    {
      name: "Pro Service",
      description:
        "e-commerce site that enables users to buy products online in a rapid, simple, organised and control manner.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "fastapi",
          color: "orange-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ps,
      demo_link: "#",
    },
    {
      name: "Recho",
      description:
        "Web application that enables users to manage echographic consultations in a rapid, simple, organised and control manner.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "orange-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "preline",
          color: "pink-text-gradient",
        },
      ],
      image: recho,
      demo_link: "https://recho-xi.vercel.app/",
    },
    {
      name: "Real estate",
      description:
        "Web application that permits to manage/visualise real estate products online in a rapid, simple, organised, secured and control manner.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "electron",
          color: "blue-text-gradient",
        },
        {
          name: "fastapi",
          color: "orange-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: estate,
      demo_link: "#",
    },
    {
      name: "Bus tickets",
      description:
        "Web application that permits to manage/reserve bus tickets online in a rapid, simple, organised, secured and control manner.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "electron",
          color: "blue-text-gradient",
        },
        {
          name: "fastapi",
          color: "orange-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: bus,
      demo_link: "#",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  