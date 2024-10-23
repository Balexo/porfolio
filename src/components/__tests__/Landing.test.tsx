import Landing from "../Landing";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { landingText } from "../../data/HomeData";
import gsap from "gsap";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

describe(Landing, () => {
  vi.mock("gsap", () => ({
    to: vi.fn(),
  }));

  describe("Landing component", () => {
    const renderWithTheme = (component: React.ReactElement) => {
      return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
    };

    it("renders landingText", () => {
      renderWithTheme(<Landing />);
      const paragraph = screen.getByText(landingText);
      expect(paragraph).toBeInTheDocument();
    });
  });
});
