import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import { FaPeopleCarryBox } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaTree } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
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

interface imageObject {
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
  icon: iconArray[];
  description: string;
}

export const proyectsItems: proyectsItems[] = [
  {
    label: "I Craft You",
    linkGitHub: "https://github.com/orgs/byte-bandis/repositories",
    image: {
      src: "/icraftyouImagen.JPG",
      alt: "Proyecto 2",
      href: "https://pagina-del-proyecto2.com",
    },
    link: "https://icraftyou.es/",
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
      alt: "Proyecto 2",
      href: "https://pagina-del-proyecto2.com",
    },
    link: "https://icraftyou.es/",
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
