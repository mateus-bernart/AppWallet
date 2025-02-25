import React from 'react';
import {Container, InputContainer} from './styles';
import Icon, {IconName} from '../Icon/Icon';
import {TextInputProps} from 'react-native';

interface InputProps {
  RightIcon?: boolean;
  LeftIcon?: boolean;
  iconName: IconName;
  iconColor: string;
  iconSize: number;
}

const Input: React.FC<InputProps & TextInputProps> = ({
  RightIcon,
  LeftIcon,
  iconName,
  iconColor,
  iconSize,
  placeholder,
  ...rest
}) => {
  return (
    <Container>
      {LeftIcon && <Icon name={iconName} color={iconColor} size={iconSize} />}
      <InputContainer placeholder={placeholder} {...rest} />
      {RightIcon && <Icon name={iconName} color={iconColor} size={iconSize} />}
    </Container>
  );
};

export default Input;
