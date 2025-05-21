import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CanvasScreen from './screens/CanvasScreen';
import EffectsScreen from './screens/EffectsScreen';
import BresenhamScreen from './screens/BresenhamScreen';
// You can use @expo/vector-icons or react-native-vector-icons for icons:
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#4f8cff',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
            height: 32,
            shadowColor: '#4f8cff',
            shadowOpacity: 0.08,
            shadowRadius: 12,
            marginBottom: 40
          },
          tabBarLabelStyle: {
            fontWeight: 'bold',
            display: 'none',
          },
        }}
      >
        <Tab.Screen
          name="Malování"
          component={CanvasScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="brush-variant" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Filtry"
          component={EffectsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="blur-radial" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Diagonály"
          component={BresenhamScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="vector-line" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}