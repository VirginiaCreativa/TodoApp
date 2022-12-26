import React from 'react';
import styled from 'styled-components';

const InputText = styled.input`
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  margin-right: 10px;
  padding: 12px 20px;
  width: 40%;
`;

const InputAdd = ({ type, name, value, placeholder, onChange, register }) => (
  <InputText
    register={register}
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default InputAdd;
