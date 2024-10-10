import styled from "styled-components";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { landingText } from "../data/HomeData";

const Landing = () => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.add(() => {
      if (textRef.current?.textContent) {
        const chars = landingText.split("");
        textRef.current.innerHTML = chars
          .map((char, i) => `<span class="char-${i}">${char}</span>`)
          .join("");
        chars.forEach((_, i) => {
          gsap.to(`.char-${i}`, {
            fontFamily: "'RaleWay Dots', cursive",
            delay: i * 0.03,
          });
        });
      }
    });
  }, []);
  return (
    <LandingStyles className="LandingStyles">
      <p ref={textRef}>{landingText} </p>
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
