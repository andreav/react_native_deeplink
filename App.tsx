/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import {StyleSheet} from 'react-native';
import {Routes} from './src/router/routes';
import AScreen from './src/screens/AScreen';
import BScreen from './src/screens/BScreen';

const Stack = createNativeStackNavigator<Routes>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Home"
        // initialRouteName="Sandbox"
        screenOptions={{
          headerShown: false,
          // headerTransparent: true,
        }}>
        <Stack.Screen name="A" component={AScreen} />
        <Stack.Screen name="B" component={BScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
