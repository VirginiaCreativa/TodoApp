import React from 'react';
import styled from 'styled-components';
import variable from '../styles/variable';

const InputText = styled.input`
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  padding: 10px 20px;
  width: 450px;
  margin-right: 10px;
`;

const Button = styled.button`
    border-radius: 4px;
    border: 0;
    padding: 0px 12px;
    background-color: ${variable.blue_1};
    &:hover {
      background-color: ${variable.blue_2};
    }
    i {
      position: relative;
      top: 2px;
      color: #fff;
      font-size: 24px;
    }
`;
const InputAdd = ({ value, btnadd }) => {
  return (
    <>
      <InputText type="text" name="" id="" value={value} />
      <Button onClick={btnadd}>
        <i class='bx bx-plus'></i>
      </Button>
    </>
  );
}

export default InputAdd;
