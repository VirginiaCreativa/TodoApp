import styled from 'styled-components';

const BoxTag = styled.div`
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  font-size: 0.8rem;
  p {
    margin-bottom: 0;
  }
`;

const Tag = ({ text, bg, color }) => (
  <BoxTag bg={bg} color={color}>
    <p>{text}</p>
  </BoxTag>
);

export default Tag;
