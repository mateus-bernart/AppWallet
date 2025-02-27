import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Register} from '../screens/Auth/Register';
import {RecoverPassword} from '../screens/Auth/RecoverPassword';
import {Login} from '../screens/Auth/Login';

const {Navigator, Screen} = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="RecoverPassword" component={RecoverPassword} />
    </Navigator>
  );
};
