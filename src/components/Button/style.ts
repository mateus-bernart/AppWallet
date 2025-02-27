import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(15)}px;
  border-radius: ${RFValue(8)}px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${RFValue(10)}px;
`;

export const Title = styled.Text`
  font-weight: 700;
`;
