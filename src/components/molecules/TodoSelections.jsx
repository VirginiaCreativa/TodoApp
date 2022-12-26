import styled from 'styled-components';

import texts from '../../config/text.json';
import Tag from '../atoms/Tag';

const Selections = texts.selections;

const BoxSelections = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 40px 0;
`;
const TodoSelections = () => (
  <BoxSelections>
    {Object.keys(Selections).map((item) => (
      <Tag text={Selections[item]} />
    ))}
  </BoxSelections>
);

export default TodoSelections;
