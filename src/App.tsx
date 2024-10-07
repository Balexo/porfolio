import Home from "./pages/Home";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyle className="App">
        <Home />
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;

const AppStyle = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;
