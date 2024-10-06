import styled from "styled-components";

interface CustomAlertProps {
  message: string[];
  type: "error" | "success";
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  message,
  type,
  onClose,
}) => {
  return (
    <StyledAlert>
      <CloseButton onClick={onClose}>X</CloseButton>
      {type === "error" ? (
        <ErrorMessageStyled className="error-message">
          {message.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </ErrorMessageStyled>
      ) : (
        <SuccesMessageStyled className="success-message">
          {message.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </SuccesMessageStyled>
      )}
    </StyledAlert>
  );
};

export default CustomAlert;

const StyledAlert = styled.div`
  height: fit-content;
`;

const CloseButton = styled.button`
  position: relative;
  top: 45px;
  left: 450px;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 5;
  background: none;
  font-weight: 300;
`;
const ErrorMessageStyled = styled.p`
  background-color: var(--darkRed);
  padding: 1rem;
`;
const SuccesMessageStyled = styled.p`
  background-color: var(--darkGreen);
  padding: 1rem;
`;
