import React, { useState } from 'react';

import { SafeAreaView, Text, StyleSheet, Platform } from 'react-native';
import Lottie from 'lottie-react-native';
import colors from '../../styles/colors';
import { Button } from '../../components/Button';
export const Welcome: React.FC = () => {
  const [] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {`Gerencie\nsuas plantas\nde forma fácil`}
      </Text>

      <Lottie source={require('../../assets/plant.json')} autoPlay loop style={styles.plant} />

      <Text style={styles.subTitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <Button title="Regar plantas" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 0 : 38,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: colors.heading,
    textAlign: 'center',
    marginTop: 38,
  },
  subTitle: {
    fontSize: 18,
    color: colors.heading,
    textAlign: 'center',
    paddingHorizontal: 20,
  },

  plant: {
    marginBottom: 10,
    height: 284,
    width: 292,
    position: 'relative',
  },
});