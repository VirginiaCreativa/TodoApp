import styled from 'styled-components';

import Footer from './footer/Footer';
import Header from './header/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  margin-bottom: 60px;
  min-height: 76vh;
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <Wrapper className="container">{children}</Wrapper>
    <Footer />
  </>
);

export default Layout;
