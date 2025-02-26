import {SafeAreaView} from 'react-native';
import React from 'react';

import {
  Container,
  ContentBody,
  ContentFooter,
  ContentHeader,
  Description,
  Title,
  ViewButton,
} from './styles';

import ButtonSocialMediaGoogle from '../../components/ButtonSocialMediaGoogle/ButtonSocialMediaGoogle';
import ButtonSocialMediaFacebook from '../../components/ButtonSocialMediaFacebook/ButtonSocialMediaFacebook';
import Input from '../../components/Input';
import {Button} from '../../components/Button';

const Login: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Welcome to {'\n'} App Wallet</Title>
          <Description>Sign up with</Description>

          <ViewButton>
            <ButtonSocialMediaGoogle title="Google" />
            <ButtonSocialMediaFacebook title="Facebook" />
          </ViewButton>
        </ContentHeader>

        <ContentBody>
          <Input
            LeftIcon
            iconName="Mail"
            iconColor="gray"
            iconSize={25}
            secureTextEntry={false}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Your E-mail"
          />
          <Input
            LeftIcon
            RightIcon
            iconName="Lock"
            iconColor="gray"
            iconSize={25}
            secureTextEntry
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Your password"
          />
          <Button title="Entrar" onPress={() => {}} variant="primary" />
        </ContentBody>

        <ContentFooter />
      </Container>
    </SafeAreaView>
  );
};

export default Login;
