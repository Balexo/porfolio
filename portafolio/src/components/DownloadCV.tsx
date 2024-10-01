import RegularButton from "./shared/RegularButton";
import styled from "styled-components";
import { useEffect } from "react";

const DownloadCV = () => {
  const handleDownload = () => {
    const cvLink = "../../public/OSCAR_VALLEJO_CV.pdf";

    const link = document.createElement("a");
    link.href = cvLink;
    link.download = "Oscar_Vallejo_CV.pdf";
    link.click();
  };

  useEffect(() => {
    const handleScroll = () => {
      const button = document.querySelector(".StyledDownloadCV");
      const scrollPosition = window.scrollY;

      if (scrollPosition < 50) {
        button?.classList.add("lower");
      } else {
        button?.classList.remove("lower");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledDownloadCV className="StyledDownloadCV">
      <RegularButton onClick={handleDownload}>Descargar CV</RegularButton>
    </StyledDownloadCV>
  );
};

export default DownloadCV;

const StyledDownloadCV = styled.div`
  position: fixed;
  top: 10px;
  right: 15px;
  z-index: 10;

  .lower {
  }

  @media (max-width: 768px) {
    top: 55px;

    &.lower {
      top: 440px;
    }
  }
`;
