import React from 'react';
import { ProductProvider } from './context/ProductContext';
import AppNavigator from './navigation/AppNavigator';
// import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <ProductProvider>

      <AppNavigator />
    </ProductProvider>
  );
}