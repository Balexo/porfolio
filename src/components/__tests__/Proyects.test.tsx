import { render, screen, fireEvent } from "@testing-library/react";
import Proyects from "../Proyects";
import type { proyectsItems } from "../../data/HomeData";
import { FaReact } from "react-icons/fa";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import React from "react";

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
    description: "Plataforma de comercio electrónico",
  },
];

describe("Proyects Component", () => {
  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  it("renders proyect", () => {
    renderWithTheme(<Proyects proyectsItems={mockProyectsItems} />);
    expect(screen.getByText("I Craft You")).toBeInTheDocument();
  });

  it("links to GitHub and websites the links", () => {
    renderWithTheme(<Proyects proyectsItems={mockProyectsItems} />);

    const githubLink = screen.getByLabelText("Visita mi proyecto en GitHub");
    const webLink = screen.getByLabelText(
      "Visita mi proyecto de I Craft You en GitHub.",
    );

    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/orgs/byte-bandis/repositories",
    );
    expect(webLink).toHaveAttribute("href", "https://icraftyou.es/");
  });

  it("renders icons", () => {
    renderWithTheme(<Proyects proyectsItems={mockProyectsItems} />);

    const icon = screen.getByTitle("React");
    expect(icon).toBeInTheDocument();
  });

  it("displays image with correct alt, height, width", () => {
    renderWithTheme(<Proyects proyectsItems={mockProyectsItems} />);

    const image = screen.getByAltText("Proyecto I Craft You");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("width", "390px");
    expect(image).toHaveAttribute("height", "240px");
  });

  it("shows initially short description", () => {
    renderWithTheme(<Proyects proyectsItems={mockProyectsItems} />);

    expect(
      screen.getByText(/Plataforma de comercio electrónico/i),
    ).toBeInTheDocument();

    expect(screen.queryByText("Leer menos")).not.toBeInTheDocument();
  });

  it("toggles button 'leer más' and 'leer menos' when clicked", () => {
    renderWithTheme(<Proyects proyectsItems={mockProyectsItems} />);

    const toggleButton = screen.getByRole("button", { name: /Leer más/i });

    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(
      screen.getByRole("button", { name: /Leer menos/i }),
    ).toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(
      screen.getByRole("button", { name: /Leer más/i }),
    ).toBeInTheDocument();
  });
});
