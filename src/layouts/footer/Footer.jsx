import styled from 'styled-components';

const BoxFooter = styled.footer`
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
`;
const Footer = () => (
  <BoxFooter>
    <div className="container">
      <p>by: Virginia.Creativa</p>
    </div>
  </BoxFooter>
);

export default Footer;
