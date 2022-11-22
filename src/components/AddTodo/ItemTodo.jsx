import React from 'react';
import styled from 'styled-components';
import variable from '../../styles/variable';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(225, 225, 225, 0.2);
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px -6px rgba(0, 0, 0, 0.4);
  width: 50%;
  margin: 0 auto 20px;
  &:nth-child(1n) {
    background-color: ${variable.item_1};
  }
  &:nth-child(2n) {
    background-color: ${variable.item_2};
  }
  p {
    font-size: 1rem;
    color: #fff;
    margin-bottom: 0;
  }
  button {
    border: 1.5px solid #fff;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    line-height: 0;
    background-color: transparent;
    i {
      font-size: 14px;
      color: #fff;
    }
  }
`;
const ItemTodo = ({ text }) => {
  return (
    <>
      <Item>
        <p>{text || 'No tiene'}</p>
        <button>
          <i className="bx bx-trash"></i>
        </button>
      </Item>
    </>
  );
};

export default ItemTodo;
