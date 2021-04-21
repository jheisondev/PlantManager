import React, { useState } from 'react';

import { SafeAreaView, StyleSheet, Platform, KeyboardAvoidingView, View } from 'react-native';
import Lottie from 'lottie-react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Button } from '../../components/Button';
import { Title } from '../../components/Title';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/core';

export const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (name !== '') {
      navigation.navigate('Confirmation');
    } else {
      setError(true);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Lottie resizeMode="contain" source={require('../../assets/emoji.json')} autoPlay loop style={styles.plant} />
        <View>

          <Title title={`Como podemos\nchamar você?`} />

          <Input
            error={error}
            onFocus={() => setError(false)}
            onBlur={() => name !== '' && setError(false)}
            placeholder="Nome ou apelido"
            onChangeText={(text) => setName(text)}
          />

          <Button
            title="Começar"
            onPress={handleSubmit}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 0 : 38,
    paddingTop: Platform.OS === 'ios' ? 0 : 92,
  },
  subTitle: {
    fontSize: 18,
    color: colors.heading,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: fonts.text,
  },
  plant: {
    marginTop: 16,
    height: 100,
    width: 100,
    position: 'absolute',
  },
});