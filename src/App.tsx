import React from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './routes';

// import {ThemeProvider} from 'styled-components/native';
// import COLORS from '../src/styles/theme';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <View style={{flex: 1}}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
