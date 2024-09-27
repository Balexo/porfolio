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
} from "./HomeData";
import styled from "styled-components";
import RegularButton from "../components/shared/RegularButton";
import DownloadCV from "../components/downloadCV";

const Home = () => {
  return (
    <>
      <Header menuItems={menuItems} />
      <StyledBody className="StyledBody">
        <DownloadCV />
        <RegularButton className="up">Subir</RegularButton>
        <Landing></Landing>
        <section id="about-me">
          <StyledH1 className="title without-margin">Sobre mi</StyledH1>
          <AboutMe />
        </section>

        <section id="skills">
          <StyledH1 className="title">Skills</StyledH1>
          <Skills skillsItems={skillsItems} />
          <StyledH1 className="title">Aprendiendo Skills</StyledH1>
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
  margin: 0rem 0rem 0rem 16rem;
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

  &.without-margin {
    margin-top: 0rem;
  }
`;
