import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import ButtonAdd from '../atoms/ButtonAdd';
import InputAdd from '../atoms/InputAdd';

const Form = styled.form`
  display: flex;
  justify-content: center;
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

  return (
    <Form name="formulario">
      <InputAdd register={description} type="text" name="addTodo" />
      <ButtonAdd type="submit" />
    </Form>
  );
};

export default TodoAdd;
