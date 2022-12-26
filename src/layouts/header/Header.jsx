import styled from 'styled-components';

import Logo from '../../components/atoms/Logo';

const Section = styled.div`
  display: flex;
  height: 130px;
  justify-content: center;
`;
const Header = () => (
  <Section>
    <Logo />
  </Section>
);

export default Header;
