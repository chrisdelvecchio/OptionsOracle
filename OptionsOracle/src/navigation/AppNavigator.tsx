// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultsScreen';

export type RootStackParamList = {
  Home: undefined;
  Result: { ticker: string; optionType: string; contract: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#0a0a0a' },
        headerTintColor: '#00ffcc',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
