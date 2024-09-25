import React from "react";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";

interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  href: string;
}

interface Icon {
  icon: IconType;
}

interface proyectsItems {
  label: string;
  image: Image;
  icon: Icon[];
  link: string;
  linkGitHub: string;
  summary: string;
}

interface MenuProps {
  proyectsItems: proyectsItems[];
}

const Proyects: React.FC<MenuProps> = ({ proyectsItems }) => {
  return (
    <section>
      <ul className="proyects-list">
        {proyectsItems.map((item) => (
          <li key={item.label} className="proyect-item">
            <h3>{item.label}</h3>
            <a
              href={item.linkGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-github"
            >
              <FaGithub size={24} />
            </a>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                className="proyect-image"
              />
            </a>
            <div className="proyect-icons">
              {item.icon.map((iconItem, index) => (
                <iconItem.icon
                  key={index}
                  className="item-icon"
                  href={item.link}
                ></iconItem.icon>
              ))}
            </div>
            <p>{item.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Proyects;
