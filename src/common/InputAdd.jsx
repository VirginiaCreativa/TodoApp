import React from 'react';
import styled from 'styled-components';

const InputText = styled.input`
  border: none;
  border-radius: 4px;
`;
const InputAdd = ({ value }) => {
  return (
    <>
      <InputText type="text" name="" id="" value={value} />
    </>
  );
}

export default InputAdd;
