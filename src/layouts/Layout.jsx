import styled from 'styled-components';

import Footer from './footer/Footer';
import Header from './header/Header';

const Wrapper = styled.div`
  height: 80vh;
`;

const BackgroundCover = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to left top,
    #4fa095,
    #79b69d,
    #a3cca7,
    #cce1b5,
    #f6f6c9
  );
  z-index: -999;
`;
const Layout = ({ children }) => (
  <>
    <BackgroundCover />
    <Header />
    <Wrapper className="container">{children}</Wrapper>
    <Footer />
  </>
);

export default Layout;
