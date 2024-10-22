import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

const TestComponent = () => <button>Test Button</button>;

describe("ThemeProvider", () => {
  it("renders with theme", () => {
    render(
      <ThemeProvider theme={theme}>
        <TestComponent />
      </ThemeProvider>,
    );
    screen.debug(); // Debug output
    const button = screen.getByRole("button", { name: /test button/i });
    expect(button).toBeInTheDocument();
  });
});
