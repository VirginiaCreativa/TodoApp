import styled from 'styled-components';

import variable from '../../styles/variable';

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${variable.white};
    font-weight: 300;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.8);
    span {
      font-weight: 900;
    }
  }
  i {
    margin-right: 10px;
    position: relative;
    top: -5px;
    color: ${variable.organe};
  }
`;
const Logo = () => (
  <Section>
    <i className="bx bx-list-minus" />
    <h1>
      App
      <span>Todo</span>
    </h1>
  </Section>
);

export default Logo;
