import React from 'react';

import ItemTodo from './ItemTodo';

const newTodo = [
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

const ListTodo = () => (
  <>
    {newTodo.map((item, index) => (
      <ItemTodo text={item.descripcion} key={item.id} />
    ))}
  </>
);

export default ListTodo;
