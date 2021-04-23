import React from 'react';

import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import Lottie from 'lottie-react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import { Button } from '../../components/Button';
import { Title } from '../../components/Title';

export const Confirmation: React.FC = () => {
  const navigation = useNavigation();

  const handlePlants = () => {
    navigation.navigate('PlantSelect');
  }
  return (
    <SafeAreaView style={styles.container}>

      <Lottie resizeMode="contain" source={require('../../assets/confirm.json')} autoPlay loop={false} speed={0.3} style={styles.plant} />

      <Title title="Prontinho" />
      <Text style={styles.subTitle}>Agora vamos começar cuidar das suas plantinhas com muito carinho.</Text>

      <Button title="Confirmar" onPress={handlePlants} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 18,
    color: colors.heading,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontFamily: fonts.text,
  },
  plant: {
    marginTop: 16,
    height: 150,
    width: 150,
  },
});