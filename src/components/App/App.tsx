
import { Landing } from '../../pages';
import { GlobalStyles } from './globalStyles';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';

export const App = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Layout>
        <Landing />
      </Layout>
    </>
  );
};

const Layout = styled.div`
  padding: 50px 100px;
  font-family: Archivo;
`;
