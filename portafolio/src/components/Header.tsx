import styled from "styled-components";
import RegularButton from "./shared/RegularButton";
import { FaLinkedin, FaGithub, FaBars } from "react-icons/fa";
import { useState } from "react";
import { IoMdArrowUp } from "react-icons/io";

interface MenuItem {
  label: string;
  sectionId: string;
}

interface HeaderProps {
  menuItems: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const yOffset = -60;
      const y =
        sectionElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setShowMenu(false);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <HeaderStyle className="HeaderStyle">
        <Logo>/*</Logo>

        <BurgerMenu onClick={toggleMenu} className="BurgerMenu">
          <FaBars size={40} />
        </BurgerMenu>
        <NavSection $showMenu={showMenu} className="NavSection">
          {menuItems.map((item) => (
            <RegularButton
              className="RegularButton"
              key={item.label}
              onClick={() => {
                handleScrollToSection(item.sectionId);
                setShowMenu(false);
              }}
            >
              {item.label}
            </RegularButton>
          ))}
        </NavSection>

        <UpButton className="upButton">
          <RegularButton
            className="up"
            onClick={() => handleScrollToSection("about-me")}
          >
            <IoMdArrowUp />
          </RegularButton>
        </UpButton>

        <Linkssection className="Linkssection">
          <a
            href="https://github.com/Balexo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledGithub className="StyledGithub" />
          </a>
          <a
            href="https://www.linkedin.com/in/oscarvallejoparedes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledLinkedin className="StyledLinkedin" />
          </a>
        </Linkssection>
      </HeaderStyle>
    </>
  );
};

export default Header;

const HeaderStyle = styled.nav`
  height: 100vh;
  background-color: green;
  position: fixed;
  width: 13rem;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    position: fixed;
    flex-direction: row;
    width: 100%;
    height: 50px;
    padding: 0.5rem 1rem;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
`;

const Logo = styled.div`
  text-align: center;
  font-size: 5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 0;
  }
`;

const BurgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: white;
  }
`;

const NavSection = styled.div<{ $showMenu: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ $showMenu }) => ($showMenu ? "center" : "flex-start")};
  transition: height 0.5s ease-in-out;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    background-color: yellow;
    position: absolute;
    top: 50px;
    left: 0px;
    overflow: ${({ $showMenu }) => ($showMenu ? "visible" : "hidden")};
    max-height: ${({ $showMenu }) => ($showMenu ? "350px" : "0px")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  button {
    margin: 10px 0;
  }
`;

const Linkssection = styled.div`
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 0px 0px 100px 0px;
  flex-direction: row;

  a {
    display: inline-block;
  }

  @media (max-width: 768px) {
    margin: 0px;
  }
`;

const StyledGithub = styled(FaGithub)`
  font-size: 65px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const StyledLinkedin = styled(FaLinkedin)`
  font-size: 65px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const UpButton = styled.div`
  position: fixed;
  bottom: 15px;
  right: 10px;
  z-index: 10;
`;
