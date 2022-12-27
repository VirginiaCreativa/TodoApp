import styled from 'styled-components';

const BoxText = styled.p`
  align-items: center;
  display: flex;
  font-size: 1rem;
`;

const TextItem = ({ text }) => <BoxText>{text}</BoxText>;

export default TextItem;
