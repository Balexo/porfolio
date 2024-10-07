// Header.test.tsx
import { render, screen } from "../../setupTests";
import Header from "../Header";

describe("Header", () => {
  const mockMenuItems = [
    { label: "Home", sectionId: "home" },
    { label: "About", sectionId: "about" },
  ];

  it("renders correctly with menu items", () => {
    render(<Header menuItems={mockMenuItems} />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("displays the logo", () => {
    render(<Header menuItems={mockMenuItems} />);

    const logo = screen.getByText("CODE");
    expect(logo).toBeInTheDocument();
  });
});
