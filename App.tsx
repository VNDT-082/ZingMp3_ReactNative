/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import TabNavigator from './src/navigators/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}



export default App;
