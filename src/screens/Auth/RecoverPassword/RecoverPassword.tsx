import {Text} from 'react-native';
import React from 'react';
import {
  ButtonDontWantRecover,
  Container,
  ContainerBody,
  ContentBody,
  ContentFooter,
  ContentHeader,
  Description,
  Title,
  TitleButtonDontWantRecover,
  TitleButtonDontWantRecover2,
} from './styles';
import Input from '../../../components/Input';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';

export const RecoverPassword = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView>
      <Container>
        <ContainerBody>
          <ContentHeader>
            <Title>Recover your password</Title>
            <Description>
              We will send you an E-mail and a SMS with the instructions.
            </Description>
          </ContentHeader>
          <ContentBody>
            <Input
              iconName="Mail"
              iconColor="gray"
              iconSize={30}
              LeftIcon
              secureTextEntry={false}
              placeholder="Email"></Input>
            <Input
              iconName="Smartphone"
              iconColor="gray"
              iconSize={30}
              LeftIcon
              placeholder="Phone"></Input>
            <Button
              title="Send Code"
              onPress={() => {}}
              size={20}
              iconName="Send"></Button>
          </ContentBody>
          <ContentFooter>
            <ButtonDontWantRecover onPress={handleGoBack}>
              <TitleButtonDontWantRecover>
                Don't want to recover?
              </TitleButtonDontWantRecover>
              <TitleButtonDontWantRecover2>
                Go to Login
              </TitleButtonDontWantRecover2>
            </ButtonDontWantRecover>
          </ContentFooter>
        </ContainerBody>
      </Container>
    </SafeAreaView>
  );
};
