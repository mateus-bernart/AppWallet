import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';

export const Button = styled(RectButton)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 16px;
  background-color: #3366ff;
  width: ${RFValue(120)}px;
  height: ${RFValue(50)}px;
  border-radius: ${RFValue(5)}px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
`;

export const IconFacebook = styled.Image`
  width: ${RFValue(25)}px;
  height: ${RFValue(25)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  margin-left: ${RFValue(10)}px;
  color: white;
`;
