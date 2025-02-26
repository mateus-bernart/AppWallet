import React, {useState} from 'react';
import {Container, InputContainer} from './styles';
import Icon, {IconName} from '../Icon/Icon';
import {TextInputProps, TouchableOpacity} from 'react-native';

interface InputProps {
  RightIcon?: boolean;
  LeftIcon?: boolean;
  iconName: IconName;
  iconColor: string;
  iconSize: number;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps & TextInputProps> = ({
  RightIcon,
  LeftIcon,
  iconName,
  iconColor,
  iconSize,
  placeholder,
  secureTextEntry,
  ...rest
}) => {
  const [security, setSecurity] = useState(secureTextEntry);

  return (
    <Container>
      {LeftIcon && <Icon name={iconName} color={iconColor} size={iconSize} />}
      <InputContainer
        secureTextEntry={security}
        placeholder={placeholder}
        {...rest}
      />

      <TouchableOpacity onPress={() => setSecurity(!security)}>
        {RightIcon && (
          <Icon name={security ? 'Eye' : 'EyeOff'} color="black" size={30} />
        )}
      </TouchableOpacity>
    </Container>
  );
};

export default Input;
