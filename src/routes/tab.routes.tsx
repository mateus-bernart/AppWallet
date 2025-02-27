import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Wallet} from '../screens/Tab/Wallet';
import {Report} from '../screens/Tab/Report';
import {Notification} from '../screens/Tab/Notification';
import {Settings} from '../screens/Tab/Settings';
import {View} from 'lucide-react-native';
import Icon from '../components/Icon/Icon';

const {Navigator, Screen} = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Navigator
      initialRouteName="Wallet"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          paddingBottom: 7,
          backgroundColor: 'lightgray',
        },
        tabBarLabelStyle: {
          fontSize: 11,
          color: 'black',
        },
      }}>
      <Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Icon name="House" color={focused ? 'black' : 'gray'} />
          ),
        }}
      />
      <Screen
        name="Report"
        component={Report}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({focused}) => (
            <Icon name="BookText" color={focused ? 'black' : 'gray'} />
          ),
        }}
      />
      <Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({focused}) => (
            <Icon name="Bell" color={focused ? 'black' : 'gray'} />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({focused}) => (
            <Icon name="Settings" color={focused ? 'black' : 'gray'} />
          ),
        }}
      />
    </Navigator>
  );
};
