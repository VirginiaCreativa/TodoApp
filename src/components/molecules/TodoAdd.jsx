/* eslint-disable no-console */
import { useForm } from 'react-hook-form';

import ButtonAdd from '../atoms/ButtonAdd';
import InputAdd from '../atoms/InputAdd';

const TodoAdd = ({ onNewTodo }) => {
  const { description, watch } = useForm({
    description: '',
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev);
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      descripcion: description,
    };

    return newTodo;
  };

  return (
    <div className="d-flex justify-content-center mb-5">
      <form onSubmit={handleSubmit} name="formulario">
        <InputAdd type="text" value={description} />
        <ButtonAdd type="submit" />
      </form>
    </div>
  );
};

export default TodoAdd;
