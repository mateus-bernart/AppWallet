import {View, Text} from 'react-native';
import React from 'react';
import {
  Container,
  Content,
  TitleAccountName,
  TitleAccountValue,
  TitleCard,
  TitleValue,
  ViewBalanceLeft,
  ViewBalanceRight,
  ViewContainer,
} from './styles';
import {Header} from '../../../components/Header/Header';

export const Wallet = () => {
  return (
    <Container>
      <Header />

      <ViewContainer>
        <Content>
          <ViewBalanceLeft>
            <TitleValue>Balance</TitleValue>
            <TitleAccountValue>R$1234,00</TitleAccountValue>
          </ViewBalanceLeft>

          <ViewBalanceRight>
            <TitleCard>Card</TitleCard>
            <TitleAccountName>MaBank</TitleAccountName>
          </ViewBalanceRight>
        </Content>
      </ViewContainer>
    </Container>
  );
};
