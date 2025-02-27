import {KeyboardAvoidingView, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

import {
  ButtonSignUp,
  Container,
  ContainerBody,
  ContentBody,
  ContentFooter,
  ContentForgotPassword,
  ContentHeader,
  Description,
  Title,
  TitleButtonSignUp,
  TitleButtonSignUp2,
  ViewButton,
} from './styles';

import ButtonSocialMediaGoogle from '../../../components/ButtonSocialMediaGoogle/ButtonSocialMediaGoogle';
import ButtonSocialMediaFacebook from '../../../components/ButtonSocialMediaFacebook/ButtonSocialMediaFacebook';
import Input from '../../../components/Input';
import {Button} from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';

export const Login: React.FC = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    navigation.navigate('RecoverPassword');
  };

  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Container>
          <ContainerBody>
            <ContentHeader>
              <Title>Welcome back to {'\n'} App Wallet</Title>
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
                placeholder="E-Mail"
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
                placeholder="Password"
              />

              <ContentForgotPassword>
                <Button
                  title="Forgot your password?"
                  onPress={handleForgotPassword}
                  variant="transparent"
                  size={16}
                  style={{
                    alignItems: 'flex-start',
                  }}></Button>
              </ContentForgotPassword>

              <Button
                title="Enter"
                onPress={() => {}}
                variant="primary"
                size={25}
              />
            </ContentBody>
          </ContainerBody>

          <ContentFooter>
            <ButtonSignUp onPress={handleRegister}>
              <TitleButtonSignUp>Don't have an account?</TitleButtonSignUp>
              <TitleButtonSignUp2>Sign Up</TitleButtonSignUp2>
            </ButtonSignUp>
          </ContentFooter>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};
