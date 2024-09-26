import Home from "./pages/Home";
import styled from "styled-components";

function App() {
  return (
    <>
      <AppStyle className="App">
        <Home />
      </AppStyle>
    </>
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
