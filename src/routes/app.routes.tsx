import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabRouter} from '@react-navigation/native';
import {TabRoutes} from './tab.routes';

const {Navigator, Screen} = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName="TabRoutes"
      screenOptions={{headerShown: false}}>
      <Screen name="TabRoutes" component={TabRoutes}></Screen>
    </Navigator>
  );
};
