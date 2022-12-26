import styled from 'styled-components';

import Logo from '../../components/atoms/Logo';

const Section = styled.div`
  display: flex;
  justify-content: center;
  height: 130px;
`;
const Header = () => (
  <Section>
    <Logo />
  </Section>
);

export default Header;
