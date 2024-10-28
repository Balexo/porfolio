import DownloadCV from "../DownloadCV";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("DownloadCV", () => {
  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  beforeEach(() => {
    Object.defineProperty(window, "scrollTo", {
      value: vi.fn(),
      writable: true,
    });
  });

  it("renders downloads CV with the correct text", () => {
    const { container } = renderWithTheme(<DownloadCV />);
    const downloadCV = container.querySelector("button");

    expect(downloadCV).toBeInTheDocument();
    expect(downloadCV?.textContent?.trim()).toBe("Descargar CV");
  });

  it("downloads CV when the button is clicked", () => {
    const { container } = renderWithTheme(<DownloadCV />);
    const createElementSpy = vi.spyOn(document, "createElement");
    const downloadButton = container.querySelector("button");

    fireEvent.click(downloadButton!);

    expect(createElementSpy).toHaveBeenCalledWith("a");
    expect(createElementSpy.mock.results[0].value.href).toContain(
      "/OSCAR_VALLEJO_CV.pdf",
    );
    expect(createElementSpy.mock.results[0].value.download).toBe(
      "Oscar_Vallejo_CV.pdf",
    );

    createElementSpy.mockRestore();
  });

  it("scrolls download CV when user scrolls down", async () => {
    const { container } = renderWithTheme(<DownloadCV />);
    const downloadContainer = container.querySelector("button")?.parentElement;

    expect(downloadContainer).toHaveClass("lower");

    fireEvent.scroll(window, { target: { scrollY: 100 } });
    await waitFor(() => {
      expect(downloadContainer).not.toHaveClass("lower");
    });

    fireEvent.scroll(window, { target: { scrollY: 0 } });
    await waitFor(() => {
      expect(downloadContainer).toHaveClass("lower");
    });
  });
});
