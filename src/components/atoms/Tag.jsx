import styled from 'styled-components';

const BoxTag = styled.div`
  background-color: ${({ bg }) => bg};
  font-size: 0.8rem;
  color: ${({ color }) => color}; ;
`;

const Tag = ({ tag, bg, color }) => (
  <BoxTag bg={bg} color={color}>
    <p>{tag}</p>
  </BoxTag>
);

export default Tag;
