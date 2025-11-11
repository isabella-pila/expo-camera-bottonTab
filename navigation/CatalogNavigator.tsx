import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CatalogStackParamList } from './NavigationTypes';

// Telas
import CatalogScreen from '../screens/CatalogScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const CatalogStack = createStackNavigator<CatalogStackParamList>();

export function CatalogNavigator() {
  return (
    <CatalogStack.Navigator>
      <CatalogStack.Screen 
        name="CatalogList" 
        component={CatalogScreen} 
        options={{ title: 'Catálogo' }} 
      />
      <CatalogStack.Screen 
        name="ProductDetail" 
        component={ProductDetailScreen} 
        options={{ title: 'Detalhe do Produto' }} 
      />
    </CatalogStack.Navigator>
  );
}