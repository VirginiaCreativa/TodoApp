import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
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
