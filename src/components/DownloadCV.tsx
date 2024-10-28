import RegularButton from "./shared/RegularButton";
import styled from "styled-components";
import { useEffect } from "react";
import throttle from "lodash/throttle";
import theme from "../theme";

const DownloadCV = () => {
  const handleDownload = () => {
    const cvLink = " /OSCAR_VALLEJO_CV.pdf";

    const link = document.createElement("a");
    link.href = cvLink;
    link.download = "Oscar_Vallejo_CV.pdf";
    link.click();
  };

  useEffect(() => {
    const button = document.querySelector(".StyledDownloadCV");
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        button?.classList.remove("lower");
      } else {
        button?.classList.add("lower");
      }
    }, 1000);

    button?.classList.add("lower");

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledDownloadCV className="StyledDownloadCV">
      <RegularButton
        onClick={handleDownload}
        $customBackgroundColor={theme.colors.mustardYellow}
        $customColor={theme.colors.navyBlue}
      >
        Descargar CV
      </RegularButton>
    </StyledDownloadCV>
  );
};

export default DownloadCV;

const StyledDownloadCV = styled.div`
  position: fixed;
  top: 40px;
  right: 15px;
  z-index: 10;
  transition: transform 0.6s ease-in-out;

  &.lower {
    transform: translateY(550px);
  }

  @media (max-width: 768px) {
    top: 50px;

    &.lower {
      transform: translateY(420px);
    }
  }
`;
