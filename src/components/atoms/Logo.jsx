import styled from 'styled-components';

import variable from '../../styles/variable';

const Section = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  h1 {
    color: ${variable.blue_1};
    font-weight: 300;
    text-shadow: 1px 1px 0px #fff;
    span {
      font-weight: 900;
    }
  }
  i {
    color: ${variable.organe};
    margin-right: 10px;
    position: relative;
    top: -5px;
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
