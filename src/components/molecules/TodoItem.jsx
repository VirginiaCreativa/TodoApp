import styled from 'styled-components';

import variable from '../../styles/variable';
import BtnIcon from '../atoms/ButtonIcon';
import TextItem from '../atoms/TextItem';
import Time from '../atoms/Time';

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 20px;
  justify-content: center;
  align-items: top;
  border-radius: 12px;
  box-shadow: 0px 0px 10px -6px rgba(0, 0, 0, 0.4);
  width: 600px;
  margin-bottom: 20px;
  padding: 10px 20px;
  &:nth-child(1n) {
    background-color: ${variable.item_3};
  }
  &:nth-child(2n) {
    background-color: ${variable.item_6};
  }

  p {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #fff;
    margin-bottom: 0;
    height: 32px;
  }
`;
const ItemTodo = ({ text }) => (
  <Item>
    <div className="col">
      <TextItem text={text || 'No tiene'} />
      <Time />
    </div>
    <div className="col">
      <BtnIcon bxicon="bx-trash-alt" size="14px" />
    </div>
  </Item>
);

export default ItemTodo;
