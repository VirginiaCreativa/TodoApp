import styled from 'styled-components';

const BoxTag = styled.div`
  background-color: ${({ bg }) => bg};
  font-size: 0.8rem;
  color: ${({ color }) => color}; ;
`;

const Tag = ({ text, bg, color }) => (
  <BoxTag bg={bg} color={color}>
    <p>{text}</p>
  </BoxTag>
);

export default Tag;
