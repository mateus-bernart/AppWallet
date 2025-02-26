import React from 'react';
import {Container, Content, Title} from './style';
import Icon, {IconName} from '../Icon/Icon';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import {variants} from './variant';

interface IButtonProps {
  title?: string;
  onPress: () => void;
  iconName?: IconName;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'outline' | 'black';
  style?: TouchableOpacityProps['style'];
}

export const Button: React.FC<IButtonProps> = ({
  title,
  onPress = () => {},
  isLoading,
  iconName,
  disabled,
  variant = 'primary',
  style,
}) => {
  const buttonVariant = variants[variant];
  const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled;

  return (
    <Container
      onPress={onPress}
      disabled={isLoading || disabled}
      style={[buttonStyle.button, style]}>
      {isLoading ? (
        <ActivityIndicator color="gray" />
      ) : (
        <Content>
          {iconName && (
            <Icon name={iconName} size={25} color={buttonStyle.icon.color} />
          )}
        </Content>
      )}
      <Title>{title}</Title>
    </Container>
  );
};
