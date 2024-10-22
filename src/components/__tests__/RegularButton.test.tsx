import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegularButton from "../shared/RegularButton";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

describe("RegularButton Component", () => {
  it("should render with default styles", () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <RegularButton>Click Me</RegularButton>
      </ThemeProvider>,
    );

    const button = getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle("color: #e8e4e2");
    expect(button).toHaveStyle("background-color: #132c3e");
  });
});
