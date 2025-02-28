import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  AmountTransaction,
  Body,
  ButtonSeeTotal,
  ButtonTitleSeeTotal,
  Container,
  Content,
  ContentFlat,
  ContentFlatFooter,
  ContentFlatHeader,
  DetailsTransaction,
  Footer,
  IconPayment,
  IconPayOut,
  IconTopUp,
  IconTransaction,
  IconTransfer,
  NameTransaction,
  SubtitleTransaction,
  Title,
  TitleAccountName,
  TitleAccountValue,
  TitleCard,
  TitlePayments,
  TitlePayOut,
  TitleTopUp,
  TitleTransfer,
  TitleValue,
  ViewBalanceLeft,
  ViewBalanceRight,
  ViewContainer,
} from './styles';
import {Header} from '../../../components/Header/Header';

import Transfer from '../../../assets/convert.png';
import Payment from '../../../assets/export.png';
import TopUp from '../../../assets/add-circle.png';
import PayOut from '../../../assets/money-send.png';
import {FlatList} from 'react-native-gesture-handler';
import {transaction} from '../../../utils/transaction';

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

        <Body>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <IconPayment source={Transfer}></IconPayment>
            <TitleTransfer>Transfer</TitleTransfer>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <IconTransfer source={Payment}></IconTransfer>
            <TitlePayments>Payment</TitlePayments>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <IconPayOut source={PayOut}></IconPayOut>
            <TitlePayOut>PayOut</TitlePayOut>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <IconTopUp source={TopUp}></IconTopUp>
            <TitleTopUp>Top Up</TitleTopUp>
          </TouchableOpacity>
        </Body>
      </ViewContainer>
      <Footer>
        <FlatList
          data={transaction}
          renderItem={({item}) => (
            <ContentFlat>
              <IconTransaction source={item.icon} />

              <DetailsTransaction>
                <NameTransaction>{item.title}</NameTransaction>
                <SubtitleTransaction>{item.subtitle}</SubtitleTransaction>
              </DetailsTransaction>

              <AmountTransaction>${item.price}</AmountTransaction>
            </ContentFlat>
          )}
          ListHeaderComponent={
            <ContentFlatHeader>
              <Title>My Transactions</Title>
              <ButtonSeeTotal>
                <ButtonTitleSeeTotal>See all</ButtonTitleSeeTotal>
              </ButtonSeeTotal>
            </ContentFlatHeader>
          }
          showsVerticalScrollIndicator={false}
        />
      </Footer>
    </Container>
  );
};
