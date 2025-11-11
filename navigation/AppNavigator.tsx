import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// O navegador de Abas
import { MainTabNavigator } from './MainTabNavigator';
import QrCodeScannerScreen from '../screens/QrCodeScannerScreen';
// Telas Modais
import CameraScreen_ExpoCamera from '../screens/expo-cameraScreen';
import ImagePickerGalleryScreen from '../screens/ImagePickerGalleryScreen';
import { VideoScreen } from '../screens/videoCamera';
import ImagePickerCameraScreen_AdvancedControls from '../screens/expo-camera-avancado';

export type RootStackParamList = {
  MainTabs: undefined;
  ImagePickerCamera: undefined;
  ImagePickerGallery: undefined;
 VideoCamera: undefined;
  QrCodeScanner: undefined;
  cameraAvancada: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
export default function AppNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
          name="MainTabs" 
          component={MainTabNavigator} // <-- Usando o TabNavigator importado
          options={{ headerShown: false }} 
        />
        
        {/* Telas Modais (acima de tudo) */}
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen 
            name="ImagePickerCamera" 
            component={CameraScreen_ExpoCamera} 
            options={{ title: 'Tirar Foto' }} 
          />
          <Stack.Screen 
            name="ImagePickerGallery" 
            component={ImagePickerGalleryScreen} 
            options={{ title: 'Escolher da Galeria' }} 
          />
          <Stack.Screen
            name="VideoCamera"
            component={VideoScreen}
            options={{ title: 'Gravar Vídeo' }}
          />
          <Stack.Screen 
  name="QrCodeScanner" 
  component={QrCodeScannerScreen} 
  options={{ 
    title: 'Ler QR Code',
    headerShown: false // Recomendado, pois já temos um botão "fechar"
  }} 
/>
  <Stack.Screen 
  name="cameraAvancada" 
  component={ImagePickerCameraScreen_AdvancedControls} 
  options={{ 
    title: 'Câmera Avançada',
    headerShown: false 
  }} 
/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}