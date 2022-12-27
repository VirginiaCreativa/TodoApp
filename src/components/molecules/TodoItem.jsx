import styled from 'styled-components';

import variable from '../../styles/variable';
import BtnIcon from '../atoms/ButtonIcon';
import Tag from '../atoms/Tag';
import TextItem from '../atoms/TextItem';
import Time from '../atoms/Time';

const Item = styled.div`
  align-items: top;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 0px 5px 0px rgba(223, 232, 237, 0.5);
  display: grid;
  justify-content: center;
  margin-bottom: 20px;
  padding: 20px;
  position: relative;
  width: 600px;
  p {
    color: ${variable.text};
    font-size: 1rem;
    font-weight: 600;
  }
  .todo {
    width: calc(10px + 600px - 40px);
  }
  .remove {
    position: absolute;
    right: 10px;
  }
`;
const Line = styled.div`
  border: 0.2px dashed ${variable.grey_3};
  display: block;
  margin: 10px 0;
  opacity: 0.3;
  width: 100%;
`;

const ItemTodo = ({ text, tag }) => (
  <Item>
    <div className="todo">
      <TextItem text={text || 'No tiene'} />
      <Tag text={tag} />
      <Line />
      <Time />
    </div>
    <div className="remove">
      <BtnIcon bxicon="bx-trash-alt" size="14px" />
    </div>
  </Item>
);

export default ItemTodo;
