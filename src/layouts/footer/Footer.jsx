import styled from 'styled-components';

const BoxFooter = styled.footer`
  p {
    align-items: center;
    color: #fff;
    display: flex;
    font-size: 1rem;
    justify-content: center;
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
