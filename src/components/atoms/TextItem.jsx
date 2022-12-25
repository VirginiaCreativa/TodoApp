import styled from 'styled-components';

const BoxText = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

const TextItem = ({ text }) => <BoxText>{text}</BoxText>;

export default TextItem;
