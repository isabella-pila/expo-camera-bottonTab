import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RootTabParamList } from './NavigationTypes';

// Navegador aninhado
import { CatalogNavigator } from './CatalogNavigator'; 

// Telas
import RegisterProductScreen from '../screens/RegisterProductScreen';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = route.name === 'Catalog'
            ? focused ? 'list' : 'list-outline'
            : focused ? 'add-circle' : 'add-circle-outline';
          
          if (iconName === 'list' || iconName === 'list-outline' || iconName === 'add-circle' || iconName === 'add-circle-outline') {
             return <Ionicons name={iconName} size={size} color={color} />;
          }
          return null;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen 
        name="Catalog" 
        component={CatalogNavigator} // <-- Usando o navegador importado
        options={{ headerShown: false, title: 'Catálogo' }} 
      />
      <Tab.Screen 
        name="Register" 
        component={RegisterProductScreen} 
        options={{ title: 'Cadastrar Produto' }} 
      />
    </Tab.Navigator>
  );
}