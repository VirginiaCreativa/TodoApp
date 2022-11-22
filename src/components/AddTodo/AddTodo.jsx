import React from 'react';
import InputAdd from '../../common/InputAdd';
import ListTodo from './ListTodo';

const AddTodo = () => {
  return (
    <>
      <div className="d-flex justify-content-center mb-5">
        <InputAdd />
      </div>
      <>
        <ListTodo />
      </>
    </>
  );
};

export default AddTodo;
