import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CanvasScreen from './screens/CanvasScreen';
import EffectsScreen from './screens/EffectsScreen';
import CompareScreen from './screens/CompareScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Malování" component={CanvasScreen} />
        <Tab.Screen name="Efekty" component={EffectsScreen} />
        <Tab.Screen name="Srovnání" component={CompareScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}