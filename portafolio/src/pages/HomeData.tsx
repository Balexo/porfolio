import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
// import { SiMysql } from "react-icons/si";
// import { SiJest } from "react-icons/si";
import { FaAws } from "react-icons/fa";

export const menuItems = [
  { label: "Sobre mi", sectionId: "about-me" },
  { label: "Skills", sectionId: "skills" },
  { label: "Proyectos", sectionId: "projects" },
  { label: "Contacto", sectionId: "contact" },
];

export const skillsItems = [
  { label: "JavaScript", icon: SiJavascript, porcentage: "70%" },
  { label: "React", icon: FaReact, porcentage: "70%" },
  { label: "Redux", icon: SiRedux, porcentage: "70%" },
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
