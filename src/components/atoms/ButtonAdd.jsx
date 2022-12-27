import React from 'react';
import styled from 'styled-components';

import variable from '../../styles/variable';

const Button = styled.button`
  background-color: ${variable.organe};
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  padding: 1px 12px;
  &:hover {
    background-color: ${variable.blue_2};
  }
  i {
    color: #fff;
    font-size: 24px;
    position: relative;
    top: 2px;
  }
`;
const ButtonAdd = ({ isValid, onClick, Ref, type }) => (
  <Button onClick={onClick} ref={Ref} type={type}>
    <i className="bx bx-plus" />
  </Button>
);

export default ButtonAdd;
