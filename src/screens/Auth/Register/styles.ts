import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Pressable} from 'react-native';

export const Container = styled.View`
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: ${RFValue(40)}px;
`;

export const ContainerBody = styled.View`
  padding: ${RFValue(20)}px;
`;

export const ContentHeader = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ContentBody = styled.View``;

export const ViewButton = styled.View`
  flex-direction: row;
  gap: 5px;
  margin-bottom: ${RFValue(10)}px;
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

export const ContentFooter = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(20)}px;
`;

export const ButtonSignUp = styled(Pressable)`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const TitleButtonSignUp = styled.Text`
  font-size: 16px;
  color: gray;
  font-family: monospace;
  font-weight: 800;
`;

export const TitleButtonSignUp2 = styled.Text`
  font-size: 18px;
  color: blue;
  font-family: monospace;
  font-weight: 800;
  margin-left: ${RFValue(10)}px;
`;
