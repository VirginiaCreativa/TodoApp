import styled from 'styled-components';

const BoxText = styled.p`
  align-items: center;
  display: flex;
  font-size: 1rem;
  margin-bottom: 0;
`;

const TextItem = ({ text }) => <BoxText>{text}</BoxText>;

export default TextItem;
