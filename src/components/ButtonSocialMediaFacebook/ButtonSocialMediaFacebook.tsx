import React from 'react';
import {Button, Title} from './styles';
import {RectButtonProps} from 'react-native-gesture-handler';
import {Facebook} from 'lucide-react-native';

interface Props extends RectButtonProps {
  title: string;
}

const ButtonSocialMediaFacebook: React.FC<Props> = ({title, ...rest}) => {
  return (
    <Button {...rest}>
      <Facebook color="white" fill="white" size={25} />
      <Title>{title}</Title>
    </Button>
  );
};

export default ButtonSocialMediaFacebook;
