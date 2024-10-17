import React from "react";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import type { proyectsItems } from "../data/HomeData";
import { useState } from "react";
import RegularButton from "./shared/RegularButton";

interface MenuProps {
  proyectsItems: proyectsItems[];
}

const Proyects: React.FC<MenuProps> = ({ proyectsItems }) => {
  const MAX_LENGTH = 75;

  const [expandedState, setIsExpandedState] = useState<boolean[]>(
    Array(proyectsItems.length).fill(false),
  );

  const handelToggleExpand = (index: number) => {
    const newExpandedState = [...expandedState];
    newExpandedState[index] = !newExpandedState[index];
    setIsExpandedState(newExpandedState);
  };

  return (
    <StyledProyectList className="proyects-list">
      {proyectsItems.map((item, index) => {
        const isExpanded = expandedState[index];
        const shortDescription = item.description.substring(0, MAX_LENGTH);

        return (
          <StyledProyectItem key={item.label} className="proyect-item">
            <StyledTitleProyect className="title-proyect">
              {item.label}
            </StyledTitleProyect>
            <StyledGitHubLink
              href={item.linkGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-github"
              aria-label="Visita mi proyecto en GitHub"
            >
              <FaGithub />
            </StyledGitHubLink>
            <StyledWebLink
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.linkDescription}
              className="project-link-web"
            >
              <StyledImage
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width ? `${item.image.width}px` : "390"}
                height={item.image.height ? `${item.image.height}px` : "240"}
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
            <StyledDescription className="description">
              {isExpanded ? item.description : shortDescription}
            </StyledDescription>
            <RegularButton onClick={() => handelToggleExpand(index)}>
              {isExpanded ? "Leer menos" : "Leer más"}
            </RegularButton>
          </StyledProyectItem>
        );
      })}
    </StyledProyectList>
  );
};

export default Proyects;

const StyledProyectList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledProyectItem = styled.ul`
  background-color: var(--darkGrey);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 1rem 0rem;
`;

const StyledTitleProyect = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  font-style: italic;
  color: var(--lightBeige);
  margin: 20px 0px;
`;

const StyledGitHubLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;

  color: var(--mustardYellow);
`;

const StyledWebLink = styled.a`
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  margin: 1rem 0rem;
  height: ${(props) => props.height || "250px"};
  width: ${(props) => props.width || "auto"};
  z-index: 25;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    height: 175px;
    width: 100%;
  }
`;

const StyledIcons = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;

  gap: 10px;
  color: var(--navyBlue);

  @media (max-width: 768px) {
    font-size: 1.6rem;
    gap: 10px;
  }
`;

const StyledDescription = styled.p`
  background-color: #8a8f91;
  font-size: 1.2rem;
  margin: 1rem 1rem;
  padding: 1rem;
  border-radius: 15px;
  white-space: pre-line;
`;
