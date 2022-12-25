import styled from 'styled-components';

import variable from '../../styles/variable';
import BtnIcon from '../atoms/ButtonIcon';
import TextItem from '../atoms/TextItem';
import Time from '../atoms/Time';

const Item = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: top;
  border-radius: 12px;
  box-shadow: 0px 0px 5px 0px rgba(223, 232, 237, 0.5);
  background-color: #fff;
  width: 600px;
  margin-bottom: 20px;
  padding: 20px;
  p {
    font-size: 1rem;
    font-weight: 600;
    color: ${variable.text};
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
  display: block;
  width: 100%;
  border: 0.2px dashed ${variable.grey_3};
  margin: 10px 0;
  opacity: 0.3;
`;

const ItemTodo = ({ text }) => (
  <Item>
    <div className="todo">
      <TextItem text={text || 'No tiene'} />
      <Line />
      <Time />
    </div>
    <div className="remove">
      <BtnIcon bxicon="bx-trash-alt" size="14px" />
    </div>
  </Item>
);

export default ItemTodo;
