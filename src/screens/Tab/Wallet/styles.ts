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
