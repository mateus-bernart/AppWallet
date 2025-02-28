import {Pressable, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ViewContainer = styled.View`
  padding: 20px 40px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  background-color: purple;
  width: 100%;
  height: 140;
  border-radius: 50px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const ViewBalanceLeft = styled.View``;

export const ViewBalanceRight = styled.View``;

export const TitleValue = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: monospace;
  color: white;
`;

export const TitleAccountValue = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  font-family: monospace;
  color: white;
`;

export const TitleCard = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: monospace;
  color: white;
`;

export const TitleAccountName = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  font-family: monospace;
  color: white;
`;

export const Body = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(20)}px;
`;

export const IconPayment = styled.Image`
  height: 80px;
  width: 80px;
`;

export const IconTransfer = styled.Image`
  height: 80px;
  width: 80px;
`;

export const IconPayOut = styled.Image`
  height: 80px;
  width: 80px;
`;

export const IconTopUp = styled.Image`
  height: 80px;
  width: 80px;
`;

export const TitleTransfer = styled.Text`
  font-size: ${RFValue(10)}px;
  color: purple;
  font-weight: bold;
  font-family: monospace;
`;

export const TitlePayments = styled.Text`
  font-size: ${RFValue(10)}px;
  color: purple;
  font-weight: bold;
  font-family: monospace;
`;

export const TitlePayOut = styled.Text`
  font-size: ${RFValue(10)}px;
  color: purple;
  font-weight: bold;
  font-family: monospace;
`;

export const TitleTopUp = styled.Text`
  font-size: ${RFValue(10)}px;
  color: purple;
  font-weight: bold;
  font-family: monospace;
`;

export const Footer = styled.View`
  flex: 1;
`;

export const ContentFlat = styled.View`
  flex-direction: row;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;

export const ContentFlatHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 15px;
`;

export const ButtonSeeTotal = styled.TouchableOpacity`
  padding: 5px 10px;
  border-width: 2px;
  border-radius: 20px;
  border-color: purple;
`;

export const ButtonTitleSeeTotal = styled.Text`
  font-size: 14px;
  color: purple;
  font-family: monospace;
`;

export const ContentFlatFooter = styled.View``;

export const IconTransaction = styled.Image`
  height: 80px;
  width: 80px;
`;

export const DetailsTransaction = styled.View`
  flex: auto;
`;

export const NameTransaction = styled.Text`
  font-size: 18px;
  font-family: monospace;
  font-weight: bold;
`;

export const SubtitleTransaction = styled.Text`
  font-size: 14px;
  color: gray;
  font-family: monospace;
`;

export const AmountTransaction = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;
