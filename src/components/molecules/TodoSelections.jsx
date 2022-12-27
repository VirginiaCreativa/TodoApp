import React, { useState } from 'react';
import styled from 'styled-components';

import capitalizeFirstLetter from '../../config/capitalizeFirstLetter';
import Tag from '../atoms/Tag';
import tagsDatas from './tags_datas';

const BoxSelections = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 40px 0;
`;

const TodoSelections = () => {
  const [isTag, setIsTag] = useState([]);

  console.log(tagsDatas);

  return (
    <BoxSelections>
      {tagsDatas.map((item, index) => (
        <Tag
          key={item.index}
          text={capitalizeFirstLetter(item.name)}
          bg={item.background}
          color={item.color}
          bghover={item.color}
          colorhover={item.background}
        />
      ))}
    </BoxSelections>
  );
};

export default TodoSelections;
