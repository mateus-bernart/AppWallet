import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: lightgray;
  width: 100%;
  height: 50px;
  padding: 0 ${RFValue(12)}px;
  justify-content: center;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const InputContainer = styled.TextInput`
  width: 100%;
  height: 45px;
  border: 0;
  border-radius: 8px;
  font-size: 15px;
  flex: 1;
`;
