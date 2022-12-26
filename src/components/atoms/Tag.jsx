import styled from 'styled-components';

const BoxTag = styled.div`
  background-color: ${({ bg }) => bg};
  border-radius: 40px;
  color: ${({ color }) => color};
  font-size: 0.8rem;
  padding: 4px 20px;
  p {
    font-weight: 600;
    margin-bottom: 0;
  }
`;

const Tag = ({ text, bg, color }) => (
  <BoxTag bg={bg} color={color}>
    <p>{text}</p>
  </BoxTag>
);

export default Tag;
