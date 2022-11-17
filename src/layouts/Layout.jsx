import styled from 'styled-components';
import Header from './header/Header';

const Wrapper = styled.div`
  height: 80vh;
`;
const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
}

export default Layout;
