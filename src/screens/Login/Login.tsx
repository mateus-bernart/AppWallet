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
          <Input LeftIcon iconName="Mail"></Input>
          <Input RightIcon iconName="Eye"></Input>
        </ContentBody>

        <ContentFooter />
      </Container>
    </SafeAreaView>
  );
};

export default Login;
