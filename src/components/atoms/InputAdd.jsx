import React from 'react';
import styled from 'styled-components';

const InputText = styled.input`
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  padding: 12px 20px;
  width: 450px;
  margin-right: 10px;
`;

const InputAdd = ({ type, name, value, placeholder, onChange }) => (
  <InputText
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default InputAdd;
