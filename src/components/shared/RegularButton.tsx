import styled from "styled-components";

interface RegularButtonProps {
  $customColor?: string;
  $customBackgroundColor?: string;
  $customCursor?: string;
  $customBorderRadius?: string;
  $customMargin?: string;
  $customPadding?: string;
  $customfontsize?: string;
  $customWidth?: string;
  $customFontWeight?: string;
  $customPosition?: string;
  $customTop?: string;
  $customRight?: string;
  $customZIndex?: string;
  $customTransition?: string;
  $specialWidth?: string;
}

const RegularButton = styled.button<RegularButtonProps>`
  color: ${(props) => {
    return props.$customColor || props.theme?.colors.lightBeige;
  }};
  background-color: ${(props) =>
    props.$customBackgroundColor || props.theme?.colors.navyBlue};
  cursor: ${(props) => props.$customCursor || "pointer"};
  border-radius: ${(props) => props.$customBorderRadius || "15px"};
  margin: ${(props) => props.$customMargin || "0"};
  padding: ${(props) => props.$customPadding || "1rem"};
  text-align: center;
  display: inline-block;
  font-size: ${(props) => props.$customfontsize || "1.2rem"};
  height: fit-content;
  width: ${(props) => props.$customWidth || "fit-content"};
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
    width: ${(props) => props.$specialWidth || props.$customWidth || "130px"};
    margin-top: 10px;
  }
`;

export default RegularButton;
