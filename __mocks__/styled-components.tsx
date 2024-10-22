import React from "react";

const ThemeProvider = ({ theme, children }) => (
  <div data-theme={theme}>{children}</div>
);

export { ThemeProvider };
