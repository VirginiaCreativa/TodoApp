import styled from 'styled-components';

import Tag from '../atoms/Tag';
import tagsDatas from './tags_datas';

const BoxSelections = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 40px 0;
`;

const TodoSelections = () => (
  <BoxSelections>
    {tagsDatas.map((item, index) => (
      <Tag
        key={item.index}
        text={item.name}
        bg={item.background}
        color={item.color}
        bghover={item.color}
        colorhover={item.background}
      />
    ))}
  </BoxSelections>
);

export default TodoSelections;
