import styled from 'styled-components';
import Logo from '../../common/Logo';

const Section = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
`;
const Header = () => {
  return (
    <Section>
      <Logo />
    </Section>
  );
}

export default Header;
