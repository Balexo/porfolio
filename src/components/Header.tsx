import styled from "styled-components";
import RegularButton from "./shared/RegularButton";
import { FaLinkedin, FaGithub, FaBars } from "react-icons/fa";
import { useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";
import throttle from "lodash/throttle";

interface MenuItem {
  label: string;
  sectionId: string;
}

interface HeaderProps {
  menuItems: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleScrollToSection = throttle((sectionId: string) => {
    requestAnimationFrame(() => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const yOffset = -60;
        const rect = sectionElement.getBoundingClientRect();
        const y = rect.top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
        setShowMenu(false);
      }
    });
  }, 500);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <NavSection className="NavSection">
        <Logo>CODE</Logo>

        <BurgerMenu
          onClick={toggleMenu}
          className="BurgerMenu"
          role="button"
          aria-label="abrir menú"
        >
          <FaBars size={40} />
        </BurgerMenu>

        <MenuSection
          $showMenu={showMenu}
          className="MenuSection"
          aria-label="sección del menú"
        >
          {menuItems.map((item) => (
            <RegularButton
              className="RegularButton"
              key={item.label}
              $customWidth="220px"
              onClick={() => {
                handleScrollToSection(item.sectionId);
                setShowMenu(false);
              }}
            >
              {item.label}
            </RegularButton>
          ))}
        </MenuSection>

        <UpButton className="upButton">
          <RegularButton
            className="up"
            onClick={() => handleScrollToSection("about-me")}
            $customPadding="0.5rem"
            $customWidth="100px"
            $specialWidth="60px"
            aria-label="Sube scroll en la página a la sección de sobre mi"
          >
            <IoMdArrowRoundUp height="2em" width="2em" />
          </RegularButton>
        </UpButton>

        <Linkssection className="Linkssection">
          <a
            href="https://github.com/Balexo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita mi perfil de GitHub"
          >
            <StyledGithub className="StyledGithub" />
          </a>
          <a
            href="https://www.linkedin.com/in/oscarvallejoparedes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita mi perfil de LinkedIn"
          >
            <StyledLinkedin className="StyledLinkedin" />
          </a>
        </Linkssection>
      </NavSection>
    </>
  );
};

export default Header;

const NavSection = styled.nav`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.gray};
  position: fixed;
  width: 20rem;
  z-index: 40;
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
  font-family: ${(props) => props.theme.fonts.logo};
  color: ${(props) => props.theme.colors.navyBlue};
  font-weight: bold;
  text-align: center;
  font-size: 5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 2.7rem;
    margin-top: 0;
  }
`;

const BurgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: ${(props) => props.theme.colors.lightBeige};
  }
`;

const MenuSection = styled.div<{ $showMenu: boolean }>`
  display: ${({ $showMenu }) => ($showMenu ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  justify-content: ${({ $showMenu }) => ($showMenu ? "center" : "flex-start")};
  transition: height 0.5s ease-in-out;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    background-color: ${(props) => props.theme.colors.silver};
    position: absolute;
    top: 50px;
    left: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  button {
    margin: 20px 0;
  }
`;

const Linkssection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 0px 0px 50px 0px;
  flex-direction: row;

  a {
    display: inline-block;
  }

  @media (max-width: 768px) {
    margin: 0px;
  }
`;

const StyledGithub = styled(FaGithub)`
  font-size: 50px;
  color: ${(props) => props.theme.colors.mustardYellow};

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const StyledLinkedin = styled(FaLinkedin)`
  font-size: 50px;
  color: ${(props) => props.theme.colors.mustardYellow};

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
