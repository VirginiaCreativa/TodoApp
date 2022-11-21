import styled from 'styled-components';
import Header from './header/Header';

const Wrapper = styled.div`
  height: 80vh;
`;

const BackgroundCover = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image:  repeating-linear-gradient(0deg, #bdd6ff, #bdd6ff 1px, #e9f5f7 1px, #e9f5f7);
  background-size: 20px 20px;
  opacity: 0.2;
  z-index: -999;
`;
const Layout = ({ children }) => {
  return (
    <>
      <BackgroundCover />
      <Header></Header>
      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
}

export default Layout;
