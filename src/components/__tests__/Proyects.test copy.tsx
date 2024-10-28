import { render, screen, fireEvent } from "@testing-library/react";
import Proyects from "../Proyects";
import type { proyectsItems } from "../../data/HomeData";
import { FaReact } from "react-icons/fa";

const mockProyectsItems: proyectsItems[] = [
  {
    label: "I Craft You",
    linkGitHub: "https://github.com/orgs/byte-bandis/repositories",
    image: {
      src: "/ICraftYouImage.JPG",
      alt: "Proyecto I Craft You",
      width: 390,
      height: 240,
      href: "https://pagina-del-proyecto2.com",
    },
    link: "https://icraftyou.es/",
    linkDescription: "Visita mi proyecto de I Craft You en GitHub.",
    icon: [{ label: "React", icon: FaReact }],
    description: "Plataforma de comercio electrónico ",
  },
];

describe("Proyects Component", () => {
  it("renders project items", () => {
    render(<Proyects proyectsItems={mockProyectsItems} />);
    expect(screen.getByText("Proyecto 1")).toBeInTheDocument();
  });

  it("renders GitHub and Web links", () => {
    render(<Proyects proyectsItems={mockProyectsItems} />);
    const githubLink = screen.getByLabelText("Visita mi proyecto en GitHub");
    const webLink = screen.getByLabelText("Visita Proyecto 1");

    expect(githubLink).toHaveAttribute("href", "https://github.com/proyecto1");
    expect(webLink).toHaveAttribute("href", "https://proyecto1.com");
  });

  it("shows short description initially", () => {
    render(<Proyects proyectsItems={mockProyectsItems} />);
    expect(
      screen.getByText(/Descripción detallada del proyecto 1/i),
    ).toBeInTheDocument();
    expect(screen.queryByText("Leer menos")).not.toBeInTheDocument();
  });

  it("toggles description when 'Leer más' and 'Leer menos' is clicked", () => {
    render(<Proyects proyectsItems={mockProyectsItems} />);
    const toggleButton = screen.getByRole("button", { name: /leer más/i });

    fireEvent.click(toggleButton);
    expect(
      screen.getByRole("button", { name: /leer menos/i }),
    ).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(
      screen.getByRole("button", { name: /leer más/i }),
    ).toBeInTheDocument();
  });

  it("displays the image with correct alt text and dimensions", () => {
    render(<Proyects proyectsItems={mockProyectsItems} />);
    const image = screen.getByAltText("Imagen de Proyecto 1");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("width", "390");
    expect(image).toHaveAttribute("height", "240");
  });

  it("renders project icons", () => {
    render(<Proyects proyectsItems={mockProyectsItems} />);
    const icon = screen.getByTitle("Icono de proyecto");

    expect(icon).toBeInTheDocument();
  });
});
