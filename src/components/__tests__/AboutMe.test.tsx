import AboutMe from "../AboutMe";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { render, screen } from "@testing-library/react";
import { aboutOscar } from "../../data/HomeData";

describe("AboutMe", () => {
  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  it("AboutOscar text is loaded correctly", () => {
    renderWithTheme(<AboutMe />);
    expect(screen.getByText(aboutOscar)).toBeInTheDocument();
  });
});
