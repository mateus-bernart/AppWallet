import React from 'react';
import {Button, IconGoogle, Title} from './styles';

import pngGoogle from '../../assets/google.png';
import {RectButtonProps} from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  title: string;
}

const ButtonSocialMediaGoogle: React.FC<Props> = ({title, ...rest}) => {
  return (
    <Button {...rest}>
      <IconGoogle source={pngGoogle} resizeMode="contain" />
      <Title>{title}</Title>
    </Button>
  );
};

export default ButtonSocialMediaGoogle;
