import styled from 'styled-components';

import variable from '../../styles/variable';

const Button = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 30px;
  line-height: 0;
  width: 30px;
  i {
    color: ${variable.grey_3};
    font-size: ${({ size }) => size};
    line-height: 0;
    padding: 0;
    position: relative;
    top: -2px;
    &:hover {
      color: ${variable.blue_1};
    }
  }
`;

const ButtonIcon = ({ isValid, onClick, Ref, type, bxicon, size }) => (
  <Button
    disableElevation
    disabled={!isValid}
    onClick={onClick}
    ref={Ref}
    type={type}
    size={size}
  >
    <i className={`bx ${bxicon}`} />
  </Button>
);

export default ButtonIcon;
