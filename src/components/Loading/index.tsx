import React from 'react';
import Lottie from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <Lottie
        resizeMode="contain"
        source={require('../../assets/load.json')}
        autoPlay loop={false}
        speed={2.5}
        style={styles.plant} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plant: {
    height: 200,
    width: 200,
    backgroundColor: 'transparent',
  },
});

export default Loading;
