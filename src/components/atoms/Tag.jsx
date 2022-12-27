import styled from 'styled-components';

const BoxTag = styled.button`
  background-color: ${({ bg }) => bg};
  border: none;
  border-radius: 40px;
  color: ${({ color }) => color};
  font-size: 0.8rem;
  padding: 4px 20px;
  &:hover {
    background-color: ${({ bghover }) => bghover};
    color: ${({ colorhover }) => colorhover};
  }
  p {
    font-weight: 600;
    margin-bottom: 0;
  }
`;

const Tag = ({ text, bg, color, bghover, colorhover }) => (
  <BoxTag bg={bg} color={color} bghover={bghover} colorhover={colorhover}>
    <p>{text}</p>
  </BoxTag>
);

export default Tag;
