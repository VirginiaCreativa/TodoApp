import styled from 'styled-components';
import variable from '../styles/variable';

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  h1 {
    color: ${variable.blue_2} ;
  }
`;
const Logo = () => {
  return (
    <Section>
      <i className='bx bx-list-minus'></i>
      <h1>AppTodo</h1>
    </Section>
  );
}

export default Logo;
