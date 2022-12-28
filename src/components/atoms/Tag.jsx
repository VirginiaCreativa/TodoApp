import styled from 'styled-components';

import capitalizeFirstLetter from '../../config/capitalizeFirstLetter';

const BoxTag = styled.button`
  background-color: ${({ bg }) => bg};
  border: none;
  border-radius: 40px;
  color: ${({ color }) => color};
  font-size: 0.8rem;
  padding: 2px 16px;
  &:hover {
    background-color: ${({ bghover }) => bghover};
    color: ${({ colorhover }) => colorhover};
  }
  p {
    color: ${({ color }) => color};
    font-size: 0.8rem !important;
    font-weight: 600;
    margin-bottom: 0;
  }
`;

const Tag = ({ text, bg, color, bghover, colorhover }) => (
  <BoxTag bg={bg} color={color} bghover={bghover} colorhover={colorhover}>
    <p>{capitalizeFirstLetter(text)}</p>
  </BoxTag>
);

export default Tag;
