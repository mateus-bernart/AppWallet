import React from 'react';
import {Container, Content, Title} from './style';
import Icon, {IconName} from '../Icon/Icon';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import {variants} from './variant';

interface IButtonProps {
  title?: string;
  size?: number;
  onPress: () => void;
  iconName?: IconName;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'outline' | 'black' | 'transparent';
  style?: TouchableOpacityProps['style'];
}

export const Button: React.FC<IButtonProps> = ({
  title,
  size,
  onPress = () => {},
  isLoading,
  iconName,
  disabled,
  variant = 'primary',
  style,
  ...rest
}) => {
  const buttonVariant = variants[variant];
  const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled;

  return (
    <Container
      {...rest}
      onPress={onPress}
      disabled={isLoading || disabled}
      style={[buttonStyle.button, style]}>
      {isLoading ? (
        <ActivityIndicator color={buttonStyle.icon.color} />
      ) : (
        <Content>
          {iconName && (
            <Icon name={iconName} size={25} color={buttonStyle.icon.color} />
          )}
          <Title
            style={{
              color: buttonStyle.title.color,
              fontSize: size,
            }}>
            {title}
          </Title>
        </Content>
      )}
    </Container>
  );
};
