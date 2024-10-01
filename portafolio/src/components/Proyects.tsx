import React from "react";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  href: string;
}

interface Icon {
  label: string;
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
    <StyledProyectList className="proyects-list">
      {proyectsItems.map((item) => (
        <StyledProyectItem key={item.label} className="proyect-item">
          <StyledTitleProyect className="title-proyect">
            {item.label}
          </StyledTitleProyect>
          <StyledGitHubLink
            href={item.linkGitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-github"
          >
            <FaGithub size={24} />
          </StyledGitHubLink>
          <StyledWebLink
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-web"
          >
            <StyledImage
              src={item.image.src}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              className="proyect-image"
            />
          </StyledWebLink>
          <StyledIcons className="proyect-icons">
            {item.icon.map((iconItem, index) => (
              <iconItem.icon
                key={index}
                className="item-icon"
                href={item.link}
                title={iconItem.label}
              ></iconItem.icon>
            ))}
          </StyledIcons>
          <StyledComments>{item.summary}</StyledComments>
        </StyledProyectItem>
      ))}
    </StyledProyectList>
  );
};

export default Proyects;

const StyledProyectList = styled.div`
  width: 90%;
`;

const StyledProyectItem = styled.ul``;

const StyledTitleProyect = styled.h3`
  text-align: center;
  font-size: 1.4rem;
`;

const StyledGitHubLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWebLink = styled.a`
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  margin: 1rem 0rem;
  height: 280px;
  width: auto;

  :hover {
    display: block;
    height: 500px;
  }

    @media (max-width: 768px) {
    height:220px;
`;

const StyledIcons = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  gap: 25px;

    @media (max-width: 768px) {
    font-size: 2rem;
    gap:10px;
`;

const StyledComments = styled.p`
  font-size: 1.2rem;
`;
