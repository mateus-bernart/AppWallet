import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  padding: ${RFValue(20)}px;
`;

export const ContentHeader = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(20)}px;
`;

export const ContentBody = styled.View``;
export const ContentFooter = styled.View``;

export const ViewButton = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  text-align: center;
  margin: ${RFValue(20)}px;
  font-family: 'monospace';
`;

export const Description = styled.Text`
  margin: ${RFValue(20)}px;
  font-size: ${RFValue(13)}px;
  font-family: 'monospace';
`;
