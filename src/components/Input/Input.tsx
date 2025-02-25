import React from 'react';
import {Container, InputContainer} from './styles';
import Icon, {IconName} from '../Icons/Icon';

interface InputProps {
  RightIcon?: boolean;
  LeftIcon?: boolean;
  iconName: IconName;
}

const Input: React.FC<InputProps> = ({RightIcon, LeftIcon, iconName}) => {
  return (
    <Container>
      {LeftIcon && <Icon name={iconName} />}
      <InputContainer />
      {RightIcon && <Icon name={iconName} />}
    </Container>
  );
};

export default Input;
