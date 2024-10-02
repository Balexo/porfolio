import Landing from "../components/Landing";
import Header from "../components/Header";
import Skills from "../components/Skills";
import OtherSkills from "../components/OtherSkills";
import AboutMe from "../components/AboutMe";
import Proyects from "../components/Proyects";
import { Contact } from "../components/Contact";
import {
  menuItems,
  skillsItems,
  proyectsItems,
  learningSkills,
  softSkills,
} from "../data/HomeData";
import styled from "styled-components";
import DownloadCV from "../components/DownloadCV";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header menuItems={menuItems} />
      <StyledBody className="StyledBody">
        <CodeBackground className="code">
          <p>Code</p>
        </CodeBackground>
        <DownloadCV />

        <Landing />

        <section id="about-me">
          <StyledH1 className="title without-margin">Sobre mi</StyledH1>
          <AboutMe />
        </section>

        <section id="skills">
          <StyledH1 className="title">Skills</StyledH1>
          <Skills skillsItems={skillsItems} />
          <StyledH1 className="title">Mejorando habilidades</StyledH1>
          <OtherSkills
            learningSkills={learningSkills}
            columns={2}
            columnsMax768px={1}
          />
          <StyledH1 className="title">Habilidades blandas</StyledH1>
          <OtherSkills
            learningSkills={softSkills}
            columns={4}
            columnsMax768px={2}
          />
        </section>

        <section id="projects">
          <StyledH1 className="title">Proyectos</StyledH1>
          <Proyects proyectsItems={proyectsItems} />
        </section>

        <section id="contact">
          <StyledH1 className="title">Contacto</StyledH1>
          <Contact />
        </section>
      </StyledBody>
    </>
  );
};

export default Home;

const StyledBody = styled.div`
  margin: 0rem 0rem 0rem 24rem;
  display: block;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 70px 0px 0px 0px;
  }
`;

const StyledH1 = styled.h1`
  margin-top: 5rem;
  text-align: center;
  font-size: 2rem;
  color: var(--heading);

  &.without-margin {
    margin-top: 0rem;
  }
`;

const CodeBackground = styled.div`
  position: absolute;
  left: 40%;
  top: -470px;
  z-index: -1;
  font-family: "Bungee Outline", sans-serif;
  font-weight: bold;

  font-size: 400px;
  color: blue;
  opacity: 0.1;
  letter-spacing: 10px;
  text-transform: uppercase;

  text-shadow:
    -2px -2px 0 rgba(0, 0, 0, 0.5),
    2px -2px 0 rgba(0, 0, 0, 0.5),
    -2px 2px 0 rgba(0, 0, 0, 0.5),
    2px 2px 0 rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 120px;
    left: 0;
    top: 80px;
  }
`;
