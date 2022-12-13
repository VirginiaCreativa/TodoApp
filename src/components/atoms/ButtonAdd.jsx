import React from 'react';
import styled from 'styled-components';

import variable from '../../styles/variable';

const Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  border: 0;
  padding: 1px 12px;
  background-color: ${variable.organe};
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
const ButtonAdd = ({ isValid, onClick, Ref, type }) => (
  <Button onClick={onClick} ref={Ref} type={type}>
    <i className="bx bx-plus" />
  </Button>
);

export default ButtonAdd;
