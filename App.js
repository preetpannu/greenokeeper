import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from ".screens/HomeScreen";
import DonationScreen from "./screens/DonationScreen";
import FirstScreen from "./screens/FirstScreen";
import LogInScreen from "./screens/LogInScreen";
import NewsScreen from "./screens/NewsScreen";
import PointsScreen from "./screens/PointsScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ThankYouScreen from "./screens/ThankYouScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpScreen">
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="DonationScreen" component={DonationScreen} />
        <Stack.Screen name="ThankYouScreen" component={ThankYouScreen} />
        <Stack.Screen name="NewsScreen" component={NewsScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PointsScreen" component={PointsScreen} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

