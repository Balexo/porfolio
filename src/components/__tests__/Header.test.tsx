import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { vi } from "vitest";
import { waitFor } from "@testing-library/react";

describe("Header", () => {
  const mockMenuItems = [
    { label: "Sobre mi", sectionId: "about-me" },
    { label: "Skills", sectionId: "skills" },
    { label: "Proyectos", sectionId: "projects" },
    { label: "Contacto", sectionId: "contact" },
  ];

  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  beforeEach(() => {
    Object.defineProperty(window, "scrollTo", {
      value: vi.fn(),
      writable: true,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly with menu items", () => {
    renderWithTheme(<Header menuItems={mockMenuItems} />);
    expect(screen.getByText("Sobre mi")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });

  it("displays the logo", () => {
    renderWithTheme(<Header menuItems={mockMenuItems} />);
    const logo = screen.getByText("CODE");
    expect(logo).toBeInTheDocument();
  });

  it("toggles the menu when clicked", () => {
    renderWithTheme(<Header menuItems={mockMenuItems} />);

    const burgerMenu = screen.getByLabelText(/abrir menú/i);
    const menuSection = screen.getByLabelText(/sección del menú/i);

    expect(menuSection).toBeVisible();

    fireEvent.click(burgerMenu);

    expect(menuSection).not.toBeVisible();

    fireEvent.click(burgerMenu);

    expect(menuSection).toBeVisible();
  });

  it("click in navegation menu buttons to go to pages sections", async () => {
    renderWithTheme(<Header menuItems={mockMenuItems} />);

    const aboutMeSection = document.createElement("div");
    aboutMeSection.id = "about-me";
    document.body.appendChild(aboutMeSection);

    const sobreMiButton = screen.getByText(/Sobre mi/i);

    fireEvent.click(sobreMiButton);

    await waitFor(() => {
      expect(window.scrollTo).toHaveBeenCalled();
    });

    const yOffset = -60;
    const rect = aboutMeSection.getBoundingClientRect();
    const expectedY = rect.top + window.scrollY + yOffset;

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: expectedY,
      behavior: "smooth",
    });

    document.body.removeChild(aboutMeSection);
  });
  it("links to GitHub and LinkedIn links", () => {
    renderWithTheme(<Header menuItems={mockMenuItems} />);

    const githubLink = screen.getByLabelText("Visita mi perfil de GitHub");
    const linkedInLink = screen.getByLabelText("Visita mi perfil de LinkedIn");

    expect(githubLink).toHaveAttribute("href", "https://github.com/Balexo");
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/oscarvallejoparedes/",
    );
  });
});
