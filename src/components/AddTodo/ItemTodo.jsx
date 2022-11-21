import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 17px -6px rgba(0,0,0,0.2);
  width: 100%;
  p {
    font-size: 1rem;
  }
`;
const ItemTodo = () => {
  return (
    <Item>
      <p>Quis laborum reprehenderit exercitation excepteur do laborum id esse nostrud ad culpa ex ex do.</p>
      <button>
        <i class='bx bx-trash'></i>
      </button>
    </Item>
  );
}

export default ItemTodo;
