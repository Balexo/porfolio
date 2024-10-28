import OtherSkills from "../OtherSkills";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { SiJavascript } from "react-icons/si";
import type { learningSkills } from "../../data/HomeData";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { vi } from "vitest";

beforeAll(() => {
  window.matchMedia = vi.fn().mockImplementation(
    (query: string): MediaQueryList => ({
      matches: query.includes("max-width: 768px"),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }),
  );
});

const mockLearningSkills: learningSkills[] = [
  { icon: SiJavascript, text: "Profundizando en ES6+" },
];

describe("Other skills", () => {
  const renderWithTheme = (
    skills: learningSkills[],
    columns: number,
    columnsMax768px: number,
  ) => {
    return render(
      <ThemeProvider theme={theme}>
        <OtherSkills
          learningSkills={mockLearningSkills}
          columns={columns}
          columnsMax768px={columnsMax768px}
        />
      </ThemeProvider>,
    );
  };

  it("renders a list of skills and icons", () => {
    const { container } = renderWithTheme(mockLearningSkills, 2, 4);

    expect(screen.getByText("Profundizando en ES6+")).toBeInTheDocument();
    const styledIcon = container.querySelector(".StyledIcon");

    expect(styledIcon).toBeInTheDocument();
  });

  it("applies correct grid styles based on columns prop", () => {
    const { container } = renderWithTheme(mockLearningSkills, 1, 2);
    const skillsContainer = container.firstChild;

    expect(skillsContainer).toHaveStyle("grid-template-columns: repeat(1,1fr)");

    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query.includes("max-width: 768px"),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
    }));

    expect(skillsContainer).toHaveStyleRule(
      "grid-template-columns",
      "repeat(2,1fr)",
      {
        media: "(max-width: 768px)",
      },
    );
  });
});
