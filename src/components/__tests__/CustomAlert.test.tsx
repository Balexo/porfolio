import { render, screen, fireEvent } from "@testing-library/react";
import CustomAlert from "../shared/CustomAlert";
import { vi } from "vitest";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

describe("CustomAlert", () => {
  const mockOnClose = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  it("renders error messages correctly", () => {
    const messages = ["Error message 1", "Error message 2"];
    renderWithTheme(
      <CustomAlert message={messages} type="error" onClose={mockOnClose} />,
    );

    messages.forEach((msg) => {
      expect(screen.getByText(msg)).toBeInTheDocument();
    });
    expect(screen.getByText("Error message 1").parentElement).toHaveClass(
      "error-message",
    );
  });

  it("renders success messages correctly", () => {
    const messages = ["Success message 1", "Success message 2"];
    renderWithTheme(
      <CustomAlert message={messages} type="success" onClose={mockOnClose} />,
    );

    messages.forEach((msg) => {
      expect(screen.getByText(msg)).toBeInTheDocument();
    });
    expect(screen.getByText("Success message 1").parentElement).toHaveClass(
      "success-message",
    );
  });

  it("calls onClose when close button is clicked", () => {
    renderWithTheme(
      <CustomAlert
        message={["Sample message"]}
        type="success"
        onClose={mockOnClose}
      />,
    );
    const closeButton = screen.getByText("X");

    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("applies the correct background color for error messages", () => {
    const messages = ["Error message"];
    renderWithTheme(
      <CustomAlert message={messages} type="error" onClose={mockOnClose} />,
    );
    const errorMessageContainer =
      screen.getByText("Error message").parentElement;

    expect(errorMessageContainer).toHaveClass("error-message");
  });

  it("applies the correct background color for success messages", () => {
    const messages = ["Success message"];
    renderWithTheme(
      <CustomAlert message={messages} type="success" onClose={mockOnClose} />,
    );
    const successMessageContainer =
      screen.getByText("Success message").parentElement;

    expect(successMessageContainer).toHaveClass("success-message");
  });
});
