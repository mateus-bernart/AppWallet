import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

import {
  ButtonSignUp,
  ContainerBody,
  ContentBody,
  ContentFooter,
  ContentHeader,
  Description,
  Title,
  TitleButtonSignUp,
  TitleButtonSignUp2,
} from './styles';

import Input from '../../../components/Input';
import {Button} from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';

export const Register: React.FC = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContainerBody>
          <ContentHeader>
            <Title>Welcome to App Wallet!</Title>
            <Description>Register</Description>
          </ContentHeader>

          <ContentBody>
            <Input
              LeftIcon
              iconName="User"
              iconColor="gray"
              iconSize={25}
              secureTextEntry={false}
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Name"
            />
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

            <Button
              title="Register"
              onPress={() => {}}
              variant="primary"
              size={25}
            />
          </ContentBody>
        </ContainerBody>

        <ContentFooter>
          <ButtonSignUp onPress={handleLogin}>
            <TitleButtonSignUp>Already have an account?</TitleButtonSignUp>
            <TitleButtonSignUp2>Sign In</TitleButtonSignUp2>
          </ButtonSignUp>
        </ContentFooter>
      </ScrollView>
    </SafeAreaView>
  );
};
