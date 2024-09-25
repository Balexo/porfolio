import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export const menuItems = [
  { label: "Sobre mi", sectionId: "about-me" },
  { label: "Skills", sectionId: "skills" },
  { label: "Proyectos", sectionId: "projects" },
  { label: "Contacto", sectionId: "contact" },
];

export const skillsItems = [
  { label: "JavaScript", icon: SiJavascript, porcentage: "70%" },
  { label: "React", icon: FaReact, porcentage: "70%" },
];

export const proyectsItems = [
  {
    label: "I Craft You",
    linkGitHub: "https://github.com/orgs/byte-bandis/repositories",
    image: {
      src: "url-de-la-imagen-2",
      alt: "Proyecto 2",
      href: "https://pagina-del-proyecto2.com",
    },
    link: "https://icraftyou.es/",
    icon: [{ icon: SiJavascript }, { icon: FaReact }],
    summary: "Página web de artesanos",
  },
];
