import React from 'react';
import {ThemeProvider} from 'styled-components/native';

import {StatusBar, View} from 'react-native';

import COLORS from '../src/styles/theme';
import Login from './screens/Login/Login';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={COLORS}>
      <StatusBar barStyle={'light-content'} />
      <View>
        <Login />
      </View>
    </ThemeProvider>
  );
};

export default App;
