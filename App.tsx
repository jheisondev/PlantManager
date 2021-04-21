import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, View } from 'react-native';
import AppLoad from 'expo-app-loading';

import Routes from './src/routes';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded)
    return <AppLoad />

  return (
    <>
      <StatusBar style="light" hidden />
      <Routes />
    </>
  );
}
