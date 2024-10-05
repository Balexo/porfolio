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
    const button = document.querySelector(".StyledDownloadCV");
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        button?.classList.remove("lower");
      } else {
        button?.classList.add("lower");
      }
    };

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
        $customBackgroundColor="var(--mustardYellow)"
        $customColor="var(--navyBlue)"
      >
        Descargar CV
      </RegularButton>
    </StyledDownloadCV>
  );
};

export default DownloadCV;

const StyledDownloadCV = styled.div`
  position: fixed;
  top: 10px;
  right: 15px;
  z-index: 10;
  transition: top 0.6s ease-in-out;

  &.lower {
    top: 400px;
  }

  @media (max-width: 768px) {
    top: 55px;
  }
`;
