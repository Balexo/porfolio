import styled from "styled-components";
import { useRef, useEffect } from "react";

const Landing = () => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const text =
      "  Hola, soy Óscar, desarrollador web full-stack con experiencia en React, Node.js y MongoDB. Te invito a visitar mi portafolio.";
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length && textRef.current) {
        textRef.current.innerHTML += text[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);
  return (
    <LandingStyles className="LandingStyles">
      <p ref={textRef}> </p>
    </LandingStyles>
  );
};

export default Landing;

const LandingStyles = styled.div`
  font-weight: 500;
  font-size: 4.5rem;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
