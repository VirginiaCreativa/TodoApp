import React from 'react';
import styled from 'styled-components';

import variable from '../../styles/variable';
import Button from '../atoms/ButtonRemove';
import Time from '../atoms/Time';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(225, 225, 225, 0.2);
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px -6px rgba(0, 0, 0, 0.4);
  width: 60%;
  margin: 0 auto 20px;
  &:nth-child(1n) {
    background-color: ${variable.item_1};
  }
  &:nth-child(2n) {
    background-color: ${variable.item_2};
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
    <div className="container">
      <div className="row">
        <div className="col-11">
          <Time />
          <p>{text || 'No tiene'}</p>
        </div>
        <div className="col-1">
          <Button />
        </div>
      </div>
    </div>
  </Item>
);

export default ItemTodo;
