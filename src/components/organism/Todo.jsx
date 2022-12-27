/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';

import TodoAdd from '../molecules/TodoAdd';
import TodoItem from '../molecules/TodoItem';
import TodoSelections from '../molecules/TodoSelections';

const BoxAdd = styled.div`
  margin-bottom: 20px;
`;

const BoxTodos = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
      <TodoSelections />
    </BoxAdd>
    <BoxTodos>
      {datas.map((item, index) => (
        <TodoItem text={item.descripcion} key={index} tag={item.tag} />
      ))}
    </BoxTodos>
  </>
);

export default TodoApp;
