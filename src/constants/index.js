import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    discuss,
    wgether,
    notes,
    kampus,
    telkom,
    php,
    mysql,
    burjo
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "mysql",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Intern Divisi Enterprise Service",
      company_name: "PT TELEKOMUNIKASI INDONESIA",
      icon: telkom,
      iconBg: "#383E56",
      date: "March - July 2022",
      points: [
        "Memverifikasi tagihan yang masuk dari mitra/anak perusahaan telkom.",
        "Memproses PR/Purchase Requisition",
        "Menjadi admin dari aplikasi invidia telkom",
      ],
    },
    {
      title: "SIB X Dicoding - Front-End Web and React",
      company_name: "KAMPUS MERDEKA ANGKATAN 3",
      icon: kampus,
      iconBg: "#E6DEDD",
      date: "Augus - Dec 2022",
      points: [
        "Belajar Fundamental Aplikasi Web dengan React",
        "Menjadi Front-End Web Developer Expert",
        "Capstone/FinalProject",
        "Soft skill & Career Development",
      ],
    }
  ];
  

  const projects = [
    {
      name: "Discuss App",
      description:
        "web-based application created using React JS and React Redux and Cypress as testing methods.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-redux",
          color: "green-text-gradient",
        },
        {
          name: "cypress",
          color: "pink-text-gradient",
        },
      ],
      image: discuss,
      source_code_link: "https://github.com/Erzeed/discuss-app",
    },
    {
      name: "Wgether",
      description:
        "web-based applications created using webpack, firebase. This application is used for thesis guidance media where there is a notification feature, creating guidance reports in PDF form and implementing PWA so that it can be installed on smartphones.",
      tags: [
        {
          name: "Webpack",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "PWA",
          color: "pink-text-gradient",
        },
      ],
      image: wgether,
      source_code_link: "https://github.com/Erzeed/task_management",
    },
    {
      name: "Notes App",
      description:
        "web-based application created by react js. In this application there are features to change themes, change languages and add and delete notes.",
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
      ],
      image: notes,
      source_code_link: "https://github.com/Erzeed/notesapp",
    },
    {
      name: "Restaurant App",
      description:
        "web-based applications created by webpack, codeceptjs, karma and puppeteer. This application has a feature to display a list of restaurants.",
      tags: [
        {
          name: "Webpack",
          color: "blue-text-gradient",
        },
        {
          name: "e2e testing",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: burjo,
      source_code_link: "https://github.com/Erzeed/burjo",
    },
  ];
  
  export { services, technologies, experiences, projects };