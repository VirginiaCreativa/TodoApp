import styled from 'styled-components';

import variable from '../../styles/variable';

const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  line-height: 0;
  i {
    position: relative;
    top: -2px;
    line-height: 0;
    padding: 0;
    color: ${variable.grey_3};
    font-size: ${({ size }) => size};
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
