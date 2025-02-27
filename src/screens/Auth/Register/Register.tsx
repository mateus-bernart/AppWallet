import {KeyboardAvoidingView, SafeAreaView} from 'react-native';
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

export const Register: React.FC = () => {
  const navigation = useNavigation();

  const handleCadastro = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="position" enabled>
        <Container>
          <ContainerBody>
            <ContentHeader>
              <Title>Register</Title>
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
                placeholder="Repeat Your password"
              />

              <Button
                title="Enter"
                onPress={() => {}}
                variant="primary"
                size={25}
              />
            </ContentBody>
          </ContainerBody>
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
