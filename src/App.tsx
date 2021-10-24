
import { Landing } from "./pages";
import styled from "@emotion/styled";

const App = () => {
  return (
    <Container>
      <Landing />
    </Container>
  );
};

const Container = styled.div`
  margin: 10px;
  font-family: Archivo;
`;

export default App;