// Header.test.tsx
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

describe("Header", () => {
  const mockMenuItems = [
    { label: "Home", sectionId: "home" },
    { label: "About", sectionId: "about" },
  ];

  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  it("renders correctly with menu items", () => {
    renderWithTheme(<Header menuItems={mockMenuItems} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("displays the logo", () => {
    renderWithTheme(<Header menuItems={mockMenuItems} />);
    const logo = screen.getByText("CODE");
    expect(logo).toBeInTheDocument();
  });
});
