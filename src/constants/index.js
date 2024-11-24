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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "DevOps Engineer",
      icon: backend,
    },
    {
      title: "AWS Solution Architect",
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
      title: "Frontend Developer (Intern)",
      company_name: "BitbyteSoft Limited",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2022 - September 2022",
      points: [
        "Collaborate with Senior Developers to build industry-level Projects.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Learning Industry Level Technology.",
      ],
    },
    {
      title: "Web developer",
      company_name: "Cloth Bangladesh Limited",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "October 2022 - December 2023",
      points: [
        "Developed and maintained the front end using Next.js and Redux.",
        "Enabling server-side rendering and ecient state management.",
        "Implemented product listings, shopping cart, Wishlist, checkout process, and user authentication features.",
        "Optimized performance through techniques like code splitting, lazy-loading, and caching, resulting in improved page load times and user experience.",
        "Working closely with the product team to ensure the website meets their requirements and user expectations.",
      ],
    },
    {
      title: "Devops Engineer",
      company_name: "Xarray.IO Limited",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
        "Designed and maintained CI/CD pipelines using Jenkins, GitLab CI, and AWS CodePipeline",
        "Integrated automated testing, deployment, and monitoring",
        "Managed IAM roles, policies, and secured AWS environments",
        "Monitored and alerted using AWS CloudWatch, Prometheus, and Grafana. Troubleshooting production issues with root cause analysis of system performance optimization",
        "Monitored AWS costs and optimized the same; built cost-saving mechanisms wherever possible. Automating infrastructure and deployments with Ansible and Docker",
        "Working closely with the development teams for cloud infrastructure improvements. Documenting processes and sharing knowledge sessions",
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
      name: "Fleetmart-Lifestyle",
      description:
        "Fleetmart Lifestyle is an e-commerce platform specializing in football jerseys and gadgets. It offers a user-friendly shopping experience with a diverse product catalog, advanced search filters, secure checkout, and responsive design for all devices. Perfect for sports enthusiasts and gadget lovers, Fleetmart Lifestyle combines style and convenience for online shopping.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://fleetmartbd.com/",
    },
    {
      name: "Cloth Bangladesh",
      description:
        "Cloth Bangladesh is an online retail platform focused on selling a wide range of clothing items. It features stylish and easy-to-navigate interface, allowing customers to explore various categories, view detailed product descriptions, and make secure purchases. Cloth Bangladesh provides a smooth shopping experience on both desktop and mobile devices.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Hisabpotro",
      description:
        "A comprehensive React Native app inspired by Bangladesh's widely-used Talikhata, designed for seamless daily transaction management. The app features an intuitive interface for recording credits, debits, and customer balances, making it ideal for small businesses and local shopkeepers with easy navigation, real-time updates, and user-friendly design.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Firestore",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://drive.google.com/drive/folders/1rv864kDrrVKj341C4K5JmToy2oAJd6CS?usp=sharing",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };