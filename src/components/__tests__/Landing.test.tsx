import Landing from "../Landing";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { landingText } from "../../data/HomeData";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import gsap from "gsap";

vi.spyOn(gsap, "to").mockImplementation(
  () =>
    ({
      stagger: 0.03,
      kill: vi.fn(() => ({})),
    }) as any,
);

describe("Landing Component", () => {
  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  it("renders landing text correctly", () => {
    renderWithTheme(<Landing />);

    landingText.split("").forEach((char, index) => {
      if (char.trim() !== "") {
        const spans = screen.getAllByText(char);

        const matchingSpan = spans.find((span) =>
          span.classList.contains(`char-${index}`),
        );
        expect(matchingSpan).toBeInTheDocument();
      }
    });
  });

  it("applies animation to each character", () => {
    renderWithTheme(<Landing />);

    const chars = landingText.split("");
    chars.forEach((_, i) => {
      const span = document.querySelector(`.char-${i}`);
      expect(span).toBeInTheDocument();
      expect(span).toHaveClass(`char-${i}`);
    });

    expect(gsap.to).toHaveBeenCalled();
    expect(gsap.to).toHaveBeenCalledWith(
      chars.map((_, i) => `.char-${i}`),
      expect.any(Object),
    );
  });
});
