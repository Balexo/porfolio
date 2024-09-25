interface MenuItem {
  label: string;
  sectionId: string;
}

interface HeaderProps {
  menuItems: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const handleScrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <header>
        <section>
          <ul className="menu-bar">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button onClick={() => handleScrollToSection(item.sectionId)} />
                {item.label}
              </li>
            ))}
          </ul>
        </section>
        <section className="logos-link">
          <div className="linkedin-logo" />
          <div className="github-logo" />
        </section>
      </header>
    </>
  );
};

export default Header;
