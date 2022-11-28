import React from 'react';

import ButtonAdd from '../atoms/ButtonAdd';
import InputAdd from '../atoms/InputAdd';

const TodoAdd = () => (
  <div className="d-flex justify-content-center mb-5">
    <InputAdd type="text" />
    <ButtonAdd />
  </div>
);

export default TodoAdd;
