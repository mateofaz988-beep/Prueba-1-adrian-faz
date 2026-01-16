import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import WelcomeScreen from '../Screen/WelcomeScreen';
import RegistroScreen from '../Screen/RegistroScreen';
import LeerScreen from '../Screen/LeerScreen';
import EditarScreen from '../Screen/Editar'; 
import ApiScreen from '../Screen/ApiScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Registro" component={RegistroScreen} />
      <Tab.Screen name="Leer" component={LeerScreen} />
      <Tab.Screen name="Editar" component={EditarScreen} />
      <Tab.Screen name="API" component={ApiScreen} />
    </Tab.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}