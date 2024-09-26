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

import { FaPeopleCarryBox } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaTree } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

export const menuItems = [
  { label: "Sobre mi", sectionId: "about-me" },
  { label: "Skills", sectionId: "skills" },
  { label: "Proyectos", sectionId: "projects" },
  { label: "Contacto", sectionId: "contact" },
];

export const skillsItems = [
  { label: "JavaScript", icon: SiJavascript, porcentage: "20%" },
  { label: "React", icon: FaReact, porcentage: "70%" },
  { label: "Redux", icon: SiRedux, porcentage: "70%" },
  { label: "Node.js", icon: FaNode, porcentage: "70%" },
  { label: "Express", icon: SiExpress, porcentage: "70%" },
  { label: "MongoDB", icon: SiMongodb, porcentage: "70%" },
  { label: "MySQL", icon: SiMysql, porcentage: "70%" },
  { label: "HTML5", icon: FaHtml5, porcentage: "70%" },
  { label: "CSS", icon: FaCss3Alt, porcentage: "70%" },
  { label: "GitHub", icon: FaGithub, porcentage: "70%" },
  { label: "Jest", icon: SiJest, porcentage: "70%" },
  { label: "AWS", icon: FaAws, porcentage: "70%" },
];

export const learningSkills = [
  { icon: SiJavascript, text: "Siempre" },
  { icon: FaNode, text: "Siempre es necesario mejorar" },
  { icon: SiMongodb, text: "Siempre es necesario mejorar" },
];

export const softSkills = [
  { icon: FaPeopleCarryBox, text: "Trabajo en equipo" },
  { icon: FaRocket, text: "Motivación" },
  { icon: FaScaleBalanced, text: "Responsabilidad" },
  { icon: FaMagnifyingGlass, text: "Analítico" },
  { icon: FaLightbulb, text: "Curiosidad" },
  { icon: FaBookOpen, text: "Aprendizaje continuo" },
  { icon: FaTree, text: "Resiliencia" },
  { icon: FaCalendarAlt, text: "Organización" },
];

export const proyectsItems = [
  {
    label: "I Craft You",
    linkGitHub: "https://github.com/orgs/byte-bandis/repositories",
    image: {
      src: "../../public/icraftyouImagen.JPG",
      alt: "Proyecto 2",
      href: "https://pagina-del-proyecto2.com",
    },
    link: "https://icraftyou.es/",
    icon: [
      { icon: SiJavascript },
      { icon: FaReact },
      { icon: SiRedux },
      { icon: FaHtml5 },
      { icon: FaCss3Alt },
      { icon: FaNode },
      { icon: SiExpress },
      { icon: SiMongodb },
      { icon: FaAws },
    ],
    summary: "Página web de artesanos",
  },
];
