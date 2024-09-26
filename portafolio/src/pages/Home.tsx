import Header from "../components/Header";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Proyects from "../components/Proyects";
import { Contact } from "../components/Contact";
import { menuItems, skillsItems, proyectsItems } from "./HomeData";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Header menuItems={menuItems} />
      <StyledBody className="StyledBody">
        <section id="about-me">
          <h1>Sobre mi</h1>
          <AboutMe />
        </section>

        <section id="skills">
          <h1>Skills</h1>
          <Skills skillsItems={skillsItems} />
        </section>

        <section id="projects">
          <h1>Proyectos</h1>
          <Proyects proyectsItems={proyectsItems} />
        </section>

        <section id="contact">
          <h1>Contacto</h1>
          <Contact />
        </section>
      </StyledBody>
    </>
  );
};

export default Home;

const StyledBody = styled.div`
  margin: 1rem 0rem 0rem 16rem;
  display: block;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 70px 0px 0px 0px;
  }
`;
