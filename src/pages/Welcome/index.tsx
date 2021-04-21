import React, { useState } from 'react';

import { SafeAreaView, Dimensions, Text, StyleSheet, Platform } from 'react-native';
import Lottie from 'lottie-react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/core';
export const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('SignIn');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {`Gerencie\nsuas plantas de\nforma fácil`}
      </Text>

      <Lottie resizeMode="contain" source={require('../../assets/plant.json')} autoPlay loop style={styles.plant} />

      <Text style={styles.subTitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <Button
        title="Regar plantas"
        onPress={handleStart}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 0 : 38,
  },
  title: {
    fontSize: 28,
    color: colors.heading,
    textAlign: 'center',
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  subTitle: {
    fontSize: 18,
    color: colors.heading,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: fonts.text,
  },
  plant: {
    marginBottom: 10,
    height: Dimensions.get('window').width * 0.7,
    width: 292,
    position: 'relative',
  },
});