/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';

import texts from '../../config/text.json';
import Tag from '../atoms/Tag';
import tagsColors from './tags_colors';

const Selections = texts.selections;

const BoxSelections = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 40px 0;
`;

const TodoSelections = () => {
  console.log(tagsColors);
  return (
    <BoxSelections>
      {Object.keys(Selections).map((item, index) => (
        <Tag key={index} text={Selections[item]} />
      ))}
    </BoxSelections>
  );
};

export default TodoSelections;
