import styled from 'styled-components';
import variable from '../styles/variable';

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  h1 {
    color: ${variable.blue_2};
    font-weight: 300;
    text-shadow:1px 1px 0px rgba(255,255,255,0.1);
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
const Logo = () => {
  return (
    <Section>
      <i className='bx bx-list-minus'></i>
      <h1>App<span>Todo</span></h1>
    </Section>
  );
}

export default Logo;
