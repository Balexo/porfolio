import styled from "styled-components";

const RegularButton = styled.button`
  color: ${(props) => props.$customColor || "var(--lightBeige)"};
  background-color: ${(props) =>
    props.$customBackgroundColor || "var(--navyBlue)"};
  cursor: ${(props) => props.$customCursor || "pointer"};
  border-radius: ${(props) => props.$customBorderRadius || "15px"};
  margin: ${(props) => props.$customMargin || "0"};
  padding: ${(props) => props.$customPadding || "1.5rem"};
  text-align: center;
  display: inline-block;
  font-size: ${(props) => props.$customfontsize || "2rem"};
  height: fit-content;
  width: ${(props) => props.$customwidth || "fit-content"};
  font-weight: ${(props) => props.$customFontWeight || "500"};
  position: ${(props) => props.$customPosition || "relative"};
  top: ${(props) => props.$customTop || "0"};
  right: ${(props) => props.$customRight || "0"};
  z-index: ${(props) => props.$customZIndex || "auto"};
  transition: ${(props) =>
    props.$customTransition || "background-color .3s ease, color .3s ease"};
  text-wrap: nowrap;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
    width: 100px;
  }
`;

export default RegularButton;
