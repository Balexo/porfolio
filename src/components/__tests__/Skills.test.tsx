import Skills from "../Skills";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import React from "react";
import { within, render, screen } from "@testing-library/react";
import { SiJavascript } from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: query === "(max-width:768px)",
      media: query,
    }),
  });
});

describe("Skills", () => {
  const mockSkillItems = [
    { label: "JavaScript", icon: SiJavascript, porcentage: "60%" },
    { label: "HTML5", icon: FaHtml5, porcentage: "70%" },
    { label: "CSS", icon: FaCss3Alt, porcentage: "70%" },
  ];
  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };
  it("renders a list of skills", () => {
    renderWithTheme(<Skills skillsItems={mockSkillItems} />);
    screen.debug();
    mockSkillItems.forEach((item) => {
      expect(screen.getByTitle(item.label)).toBeInTheDocument();
      expect(screen.getByTitle(item.label)).toBeInTheDocument();

      const skill = screen.getByTitle(item.label);
      const percentageSkill = within(skill).getByText(item.porcentage);
      expect(percentageSkill).toBeInTheDocument();
    });
  });

  it("renders skillsBar progress", () => {
    const { container } = renderWithTheme(
      <Skills skillsItems={mockSkillItems} />,
    );

    mockSkillItems.forEach((item) => {
      const progressBar = container.querySelector(
        `.skill-bar-progress-${item.label}`,
      );
      expect(progressBar).toHaveStyle(`width: ${item.porcentage}`);
    });
  });

  it("transaction of skillsbars progress", () => {
    const { container } = renderWithTheme(
      <Skills skillsItems={mockSkillItems} />,
    );

    mockSkillItems.forEach((item) => {
      const transactionBar = container.querySelector(
        `.skill-bar-progress-${item.label}`,
      );

      expect(transactionBar).toHaveStyle("transition: width 0.3s ease-in-out");
    });
  });
});
