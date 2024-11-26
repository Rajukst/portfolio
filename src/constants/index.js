import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    docker,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  import python from "../assets/tech/python.png"
  import terraform from "../assets/tech/terraform.png"
  import jenkins from "../assets/tech/jenkins.png"
  import kubernetes from "../assets/tech/kubernetes.png"
  import nginx from "../assets/tech/nginx.png"
  import linux from "../assets/tech/linux.png"
  import ec2 from "../assets/tech/ec2.png"
  import saminyasar from "../assets/tech/samin-yasar.png"
  import ariful from "../assets/tech/ariful-alam.png"
  import jahid from "../assets/tech/jahid.jpg"
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Python",
      icon: python,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
    {
      name: "Terraform",
      icon: terraform,
    },
    {
      name: "Kubernetes",
      icon: kubernetes,
    },
    {
      name: "Nginx",
      icon: nginx,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "EC2",
      icon: ec2,
    },
    {
      name: "git",
      icon: git,
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
        "I thought it was impossible to make a website as beautiful as our product, but Raju proved me wrong.",
      name: "Samin Yasar",
      designation: "Founder & CEO",
      company: "Fleetmart Lifestyle",
      image: saminyasar,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about optimizing performance.",
      name: "Ariful Alam",
      designation: "Managing Director",
      company: "Cloth Bangladesh Limited",
      image: ariful,
    },
    {
      testimonial:
        "After Raju optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Jahid Iqbal",
      designation: "Founder & CEO",
      company: "Anaj Shopping",
      image: jahid,
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
      source_code_link: "https://fleetmartbd.com",
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
      source_code_link: "https://clothbangladesh.com/",
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