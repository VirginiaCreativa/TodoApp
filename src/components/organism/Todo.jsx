/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';

import TodoAdd from '../molecules/TodoAdd';
import TodoItem from '../molecules/TodoItem';

const BoxAdd = styled.div`
  margin-bottom: 60px;
`;

const BoxTodos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const datas = [
  {
    id: new Date().getTime(),
    done: false,
    descripcion: 'Comprar gaseosa manzana',
    tag: 'comprar',
  },
  {
    id: new Date().getTime(),
    done: false,
    descripcion: 'Clase Ingles',
    tag: 'casa',
  },
  {
    id: new Date().getTime(),
    done: false,
    descripcion: 'Clase FrontEnd',
    tag: 'pago',
  },
];

const TodoApp = () => (
  <>
    <BoxAdd>
      <TodoAdd />
    </BoxAdd>
    <BoxTodos>
      {datas.map((item, index) => (
        <TodoItem text={item.descripcion} key={index} tag={item.tag} />
      ))}
    </BoxTodos>
  </>
);

export default TodoApp;
