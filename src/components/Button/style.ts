import {Pressable} from 'react-native';
import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.Pressable`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(15)}px;
  border-radius: ${RFValue(8)}px;
  background-color: green;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 700;
  color: white;
`;
