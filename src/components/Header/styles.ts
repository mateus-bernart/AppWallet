import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${Platform.OS === 'ios' ? 0 : 25}px;
`;

export const ContentHeader = styled.View`
  width: 100%;
  padding: 10px;
  justify-content: center;
  margin-left: 30px;
`;

export const Avatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 30px;
  margin-right: 15px;
`;

export const AppName = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Status = styled.Text`
  font-size: 15px;
  color: gray;
  font-weight: bold;
`;
