import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaGithub,
  FaLightbulb,
  FaBookOpen,
  FaTree,
  FaCalendarAlt,
} from "react-icons/fa";

import {
  FaPeopleCarryBox,
  FaRocket,
  FaScaleBalanced,
  FaMagnifyingGlass,
  FaNode,
} from "react-icons/fa6";

import {
  SiJavascript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJest,
  SiTypescript,
} from "react-icons/si";

import { IconType } from "react-icons";

interface menuItems {
  label: string;
  sectionId: string;
}

export const menuItems: menuItems[] = [
  { label: "Sobre mi", sectionId: "about-me" },
  { label: "Skills", sectionId: "skills" },
  { label: "Proyectos", sectionId: "projects" },
  { label: "Contacto", sectionId: "contact" },
];

export const landingText: string =
  "Hola, soy Óscar, desarrollador web Full Stack con experiencia en React, Node.js y MongoDB. Te invito a visitar mi porfolio.";

export const aboutOscar: string =
  "Soy un desarrollador full stack con habilidades en HTML, CSS, JavaScript, Node.js, React y MongoDB. Mi experiencia en el desarrollo web me permite abordar proyectos de manera eficiente y asegurar la escalabilidad, disponibilidad y seguridad de las aplicaciones en entornos de producción. Estoy continuamente ampliando mis conocimientos y busco seguir mejorarando mis habilidades en las últimas tendencias y tecnologías. Dedicado y apasionado hacía un enfoque en la calidad y la atención al detalle en cada proyecto que entrego. Estoy comprometido a entregar soluciones de alta calidad y ampliar mis conocimientos.";

interface skillsItems {
  label: string;
  icon: IconType;
  porcentage: string;
}

export const skillsItems: skillsItems[] = [
  { label: "JavaScript", icon: SiJavascript, porcentage: "60%" },
  { label: "HTML5", icon: FaHtml5, porcentage: "70%" },
  { label: "CSS", icon: FaCss3Alt, porcentage: "70%" },
  { label: "React", icon: FaReact, porcentage: "50%" },
  { label: "Node.js", icon: FaNode, porcentage: "40%" },
  { label: "Express", icon: SiExpress, porcentage: "40%" },
  { label: "MongoDB", icon: SiMongodb, porcentage: "30%" },
  { label: "TypeScript", icon: SiTypescript, porcentage: "30%" },
  { label: "MySQL", icon: SiMysql, porcentage: "30%" },
  { label: "GitHub", icon: FaGithub, porcentage: "60%" },
  { label: "Redux", icon: SiRedux, porcentage: "40%" },
  { label: "Jest", icon: SiJest, porcentage: "30%" },
  { label: "AWS", icon: FaAws, porcentage: "20%" },
];

interface learningSkills {
  icon: IconType;
  text: string;
}

export const learningSkills: learningSkills[] = [
  { icon: SiJavascript, text: "Profundizando en ES6+" },
  { icon: FaNode, text: "Mejorando en la creación de APIs" },
  { icon: SiMongodb, text: "Optimizando consultas y agregaciones" },
];

interface softSkills {
  icon: IconType;
  text: string;
}

export const softSkills: softSkills[] = [
  { icon: FaPeopleCarryBox, text: "Colaborativo" },
  { icon: FaRocket, text: "Motivado" },
  { icon: FaMagnifyingGlass, text: "Analítico" },
  { icon: FaScaleBalanced, text: "Responsable" },
  { icon: FaLightbulb, text: "Curioso" },
  { icon: FaBookOpen, text: "Aprendiz continuo" },
  { icon: FaTree, text: "Resiliente" },
  { icon: FaCalendarAlt, text: "Organizado" },
];

export interface imageObject {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  href: string;
}

interface iconArray {
  label: string;
  icon: IconType;
}

export interface proyectsItems {
  label: string;
  linkGitHub: string;
  image: imageObject;
  link: string;
  linkDescription: string;
  icon: iconArray[];
  description: string;
}

export const proyectsItems: proyectsItems[] = [
  {
    label: "I Craft You",
    linkGitHub: "https://github.com/orgs/byte-bandis/repositories",
    image: {
      src: "/ICraftYouImage.JPG",
      alt: "Proyecto I Craft You",
      href: "https://pagina-del-proyecto2.com",
    },
    link: "https://icraftyou.es/",
    linkDescription: "Visita mi proyecto de I Craft You en GitHub.",
    icon: [
      { label: "JavaScript", icon: SiJavascript },
      { label: "React", icon: FaReact },
      { label: "Redux", icon: SiRedux },
      { label: "HTML5", icon: FaHtml5 },
      { label: "CSS", icon: FaCss3Alt },
      { label: "Node.js", icon: FaNode },
      { label: "Express", icon: SiExpress },
      { label: "MongoDB", icon: SiMongodb },
      { label: "AWS", icon: FaAws },
    ],
    description:
      "Plataforma de comercio electrónico que conecta a artesanos con compradores. \n La aplicación cuenta con una interfaz intuitiva que permite a los usuarios buscar y comprar productos de manera fácil y segura. En el backend, se ha implementado una API que gestiona la base de datos de productos, usuarios y pedidos, además de un sistema de autenticación seguro. La plataforma incluye funcionalidades como chat en vivo, paginación, múltiples idiomas y un sistema de envío de correos electrónicos automatizados.",
  },
  {
    label: "Porfolio",
    linkGitHub: "https://github.com/Balexo/portafolio",
    image: {
      src: "/porfolio.JPG",
      alt: "Proyecto porfolio personal",
      href: "https://oscarvallejo.es/",
    },
    link: "https://oscarvallejo.es/",
    linkDescription: "Visita mi proyecto de porfolio personal en GitHub.",
    icon: [
      { label: "React", icon: FaReact },
      { label: "TypeScript", icon: SiTypescript },
      { label: "HTML5", icon: FaHtml5 },
      { label: "CSS", icon: FaCss3Alt },
      { label: "AWS", icon: FaAws },
    ],
    description:
      "Página web hecha en React y TypeScript donde subir mis proyectos.          \nFuncionalidades de recibir correo a través de la zona de contacto y responsive para pantallas de 768px.",
  },
];
