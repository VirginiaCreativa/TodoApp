import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 17px -6px rgba(0,0,0,0.2);
  width: 80%;
  p {
    font-size: 1rem;
  }
  button {
    border: 0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    i {
      font-size: 20px;
    }
  }
`;
const ItemTodo = ({ text }) => {
  return (
    <>
      <Item>
        <p>{text || 'No tiene'}</p>
        <button>
          <i className='bx bx-trash'></i>
        </button>
      </Item>
    </>
  );
}

export default ItemTodo;
