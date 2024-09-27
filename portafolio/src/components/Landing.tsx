import styled from "styled-components";

const Landing = () => {
  return (
    <LandingStyles className="LandingStyles">
      <p>
        Hola, soy Óscar. Soy desarrollador web full-stack con experiencia en
        React, Node.js y MongoDB. Te invito a visitar mi portafolio.
      </p>
    </LandingStyles>
  );
};

export default Landing;

const LandingStyles = styled.div`
  @keyframes impressiveEntrance {
    0% {
      opacity: 0;
      transform: translateY(-50px) scale(0.8);
    }
    50% {
      opacity: 0.5;
      transform: translateY(0) scale(1.1);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  animation: impressiveEntrance 2s ease-in-out;
`;
