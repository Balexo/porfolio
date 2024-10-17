import { lazy, Suspense } from "react";
import Landing from "../components/Landing";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import {
  menuItems,
  skillsItems,
  proyectsItems,
  learningSkills,
  softSkills,
} from "../data/HomeData";
import styled from "styled-components";
import "./Home.css";

const DownloadCV = lazy(() => import("../components/DownloadCV"));
const Skills = lazy(() => import("../components/Skills"));
const OtherSkills = lazy(() => import("../components/OtherSkills"));
const Proyects = lazy(() => import("../components/Proyects"));
const Contact = lazy(() => import("../components/Contact"));

const Home = () => {
  return (
    <>
      <Header menuItems={menuItems} />
      <StyledBody className="StyledBody">
        <CodeBackground className="code">
          <p>CODE</p>
        </CodeBackground>
        <Suspense fallback={<div>Loading...</div>}>
          <DownloadCV />

          <Landing />

          <section id="about-me">
            <StyledH1 className="title without-margin">Sobre mí</StyledH1>
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
              columnsMax768px={1}
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
        </Suspense>
      </StyledBody>
    </>
  );
};

export default Home;

const StyledBody = styled.div`
  margin: -4rem 0rem 0rem 22rem;
  display: block;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 10px 0px 0px 0px;
  }
`;

const StyledH1 = styled.h1`
  margin-top: 5rem;
  text-align: center;
  font-size: 3rem;
  color: var(--navyBlue);

  &.without-margin {
    margin-top: 0rem;
  }
`;

const CodeBackground = styled.div`
  position: absolute;
  left: 30%;
  top: -260px;
  z-index: -1;
  font-family: "Bungee Outline", sans-serif;
  font-weight: bold;

  font-size: 300px;
  color: var(--navyBlue);
  opacity: 0.02;
  letter-spacing: 10px;
  text-transform: uppercase;

  text-shadow:
    -2px -2px 0 rgba(0, 0, 0, 0.5),
    2px -2px 0 rgba(0, 0, 0, 0.5),
    -2px 2px 0 rgba(0, 0, 0, 0.5),
    2px 2px 0 rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 5.6rem;
    left: 10px;
    top: 80px;
  }
`;
