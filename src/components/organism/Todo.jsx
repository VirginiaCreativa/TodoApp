import React from 'react';

import TodoAdd from '../molecules/TodoAdd';
import TodoItem from '../molecules/TodoItem';

const datas = [
  {
    id: new Date().getTime(),
    done: false,
    descripcion: 'Comprar gaseosa manzana',
  },
  {
    id: new Date().getTime(),
    done: false,
    descripcion: 'Clase Ingles',
  },
  {
    id: new Date().getTime(),
    done: false,
    descripcion: 'Clase FrontEnd',
  },
];

const TodoApp = () => (
  <>
    <TodoAdd></TodoAdd>
    {datas.map((item, index) => (
      <TodoItem text={item.descripcion} key={index} />
    ))}
  </>
);

export default TodoApp;
