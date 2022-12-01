import React from 'react';
import styled from 'styled-components';

import variable from '../../styles/variable';

const Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  border: 1.5px solid #fff;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: transparent;
  line-height: 0;
  &:hover {
    border: 1.5px solid ${variable.red};
  }
  i {
    position: relative;
    top: -2px;
    line-height: 0;
    padding: 0;
    color: #fff;
    font-size: 16px;
    &:hover {
      color: ${variable.red};
    }
  }
`;
const ButtonRemove = ({ isValid, onClick, Ref, type }) => (
  <Button
    disableElevation
    disabled={!isValid}
    onClick={onClick}
    ref={Ref}
    type={type}
  >
    <i className="bx bx-trash-alt" />
  </Button>
);

export default ButtonRemove;
