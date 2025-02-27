import {View, Text} from 'react-native';
import React from 'react';
import {AppName, Avatar, Container, ContentHeader, Status} from './styles';

export const Header = () => {
  return (
    <Container>
      <ContentHeader>
        <AppName>Wallet</AppName>
        <Status>Ativo</Status>
      </ContentHeader>
      <Avatar source={{uri: 'https://github.com/mateus-bernart.png'}} />
    </Container>
  );
};
