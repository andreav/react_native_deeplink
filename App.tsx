/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Routes} from './src/router/routes';
import AScreen from './src/screens/AScreen';
import BScreen from './src/screens/BScreen';

const Stack = createNativeStackNavigator<Routes>();

const App = () => {
  const config = {
    screens: {
      A: {
        path: 'A',
      },
      BV: {
        path: 'B',
      },
    },
  };

  const linking: LinkingOptions<ReactNavigation.RootParamList> = {
    prefixes: ['rn_deeplink://'],
    // optional
    config: {
      screens: {
        A: 'A',
        B: 'B',
      },
    },
  };

  return (
    <NavigationContainer
      linking={linking}
      fallback={<Text>Loading React Navigation...</Text>}>
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
