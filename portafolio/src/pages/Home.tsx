import Header from "../components/Header";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Proyects from "../components/Proyects";
import { menuItems, skillsItems, proyectsItems } from "./HomeData";

const Home = () => {
  return (
    <>
      <Header menuItems={menuItems} />

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
      </section>
    </>
  );
};

export default Home;
