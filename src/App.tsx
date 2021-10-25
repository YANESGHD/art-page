
import { Landing } from "./pages";
import styled from "@emotion/styled";

const App = () => {
  return (
    <Layout>
      <Landing />
    </Layout>
  );
};

const Layout = styled.div`
  padding: 50px 100px;
  font-family: Archivo;
`;

export default App;