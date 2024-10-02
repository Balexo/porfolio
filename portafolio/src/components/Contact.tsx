import RegularButton from "./shared/RegularButton";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "@formspree/react";
import CustomAlert from "./shared/CustomAlert";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const position: LatLngExpression = [42.8808, -8.54];

export const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(" ");
  const [state, handleSubmit] = useForm("mrbznear");
  const [messageValidations, setMessageValidations] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string[]>([]);

  function RegexEmail(email: string) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  const validationsForm = () => {
    const errors = [];

    if (!name.trim()) {
      const errorNameMessage: string = "El nombre es obligatorio";
      errors.push(errorNameMessage);
    }

    if (!email.trim() && !RegexEmail) {
      const errorEmailMessage: string = "El email no es válido";
      errors.push(errorEmailMessage);
    }

    if (!message.trim()) {
      const errorTextAreaMessage: string = "Por favor añade el mensaje";
      errors.push(errorTextAreaMessage);
    }

    setMessageValidations(errors);

    return errors;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validationsForm();

    if (errors.length === 0) {
      await handleSubmit(e);

      console.log(state);
      console.log(Response);

      try {
        if (state.succeeded) {
          setSuccessMessage([
            "Correo enviado correctamente! Gracias por contactar, pronto recibirás respuesta.",
          ]);
          setMessageValidations([]);
          setName("");
          setEmail("");
          setMessage("");
        }
      } catch {
        setMessageValidations(["Parece que hubo un error"]);
      }
    }
  };

  return (
    <>
      <StyledContact className="styledcontact">
        <StyledForm className="styledform" onSubmit={handleFormSubmit}>
          {messageValidations.length > 0 && (
            <CustomAlert message={messageValidations} type={"error"} />
          )}
          {successMessage && (
            <CustomAlert message={successMessage} type={"success"} />
          )}
          <StyledLabel htmlFor="name" className="styledlabel">
            Nombre:
          </StyledLabel>
          <StyledInput
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            required
            placeholder="Tu nombre"
            className="styledlinput"
          />

          <StyledLabel htmlFor="email" className="styledlabel">
            Email:
          </StyledLabel>
          <StyledInput
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
            placeholder="Tu email"
            className="styledlinput"
          />

          <StyledLabel htmlFor="message" className="styledlabel">
            Introduce el mensaje:
          </StyledLabel>
          <StyledTextarea
            id="message"
            name="message"
            value={message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMessage(e.target.value)
            }
            required
            placeholder="Escribe tu mensaje aquí"
            className="styledtextarea"
          ></StyledTextarea>

          <RegularButton
            type="submit"
            disabled={state.submitting}
            className="submit-button"
            $customfontsize="1.4rem"
          >
            {state.submitting ? "Enviando" : "Enviar"}
          </RegularButton>
        </StyledForm>

        <StyledMap className="StyledMap">
          <MapContainer className="MapContainer" center={position} zoom={14}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>{<p>Oscar Vallejo</p>}</Popup>
            </Marker>
          </MapContainer>
        </StyledMap>
      </StyledContact>
    </>
  );
};

const StyledContact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

   @media (max-width: 768px) {
   grid-template-columns: 1fr;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 1rem;
  gap: 0.5rem 0rem;

    @media (max-width: 768px) {
    gap: 0rem;
`;

const StyledLabel = styled.label`
  padding: 1rem 1rem 1rem 1rem;
`;

const StyledInput = styled.input`
  padding: 1.2rem;
`;

const StyledTextarea = styled.textarea`
  height: 14rem;
  width: 100%;
`;

const StyledMap = styled.div`
  height: 750px;
  width: 950px;

  margin: 0px auto;

  .MapContainer {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 550px;
    width: 350px;
    margin-bottom: 5rem;
  }
`;
