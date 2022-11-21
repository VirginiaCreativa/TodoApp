import React from 'react';
import ItemTodo from './ItemTodo';

const newTodo = [{
  id: new Date().getTime(),
  done: false,
  descripcion: 'Comprar gaseosa manzana',
}, {
  id: new Date().getTime(),
  done: false,
  descripcion: 'Clase Ingles',
}
]

const ListTodo = () => {

  console.log(newTodo[0].descripcion);
  return (
    <>
      {
        newTodo.map((item, index) => <ItemTodo text={item.descripcion} key={index} />)
      }
    </>
  );
}

export default ListTodo;
