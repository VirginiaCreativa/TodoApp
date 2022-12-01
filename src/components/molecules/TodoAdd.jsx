import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import ButtonAdd from '../atoms/ButtonAdd';
import InputAdd from '../atoms/InputAdd';

const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const TodoAdd = ({ onNewTodo }) => {
  const { description, handleSubmit, watch } = useForm();

  // const handleSubmit = (ev) => {
  //   ev.preventDefault();

  //   const newTodo = {
  //     id: new Date().getTime(),
  //     done: false,
  //     descripcion: description,
  //   };

  //   ev.target[0].value = '';
  //   return newTodo;
  // };

  console.log(watch());

  return (
    <div className="d-flex justify-content-center mb-5">
      <Form name="formulario">
        <InputAdd register={description} type="text" name="addTodo" />
        <ButtonAdd type="submit" />
      </Form>
    </div>
  );
};

export default TodoAdd;
