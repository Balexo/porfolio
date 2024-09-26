import RegularButton from "./RegularButton";

export const Contact: React.FC = () => {
  return (
    <>
      <section>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" required placeholder="Tu nombre" />

          <label htmlFor="email">Email</label>
          <input type="text" id="meail" required placeholder="Tu email" />

          <label htmlFor="message">Introduce el mensaje:</label>
          <textarea
            id="message"
            required
            placeholder="Escribe tu mensaje aquí"
          ></textarea>

          <RegularButton type="submit">Enviar</RegularButton>
        </form>
      </section>

      <section>
        <iframe
          src="https://maps.app.goo.gl/huGDT9bCyUGFsYvaA"
          width="400"
          height="300"
        ></iframe>
      </section>
    </>
  );
};
