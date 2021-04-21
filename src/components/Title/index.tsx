import React from 'react';

import { Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface Props {
  title?: string;
}

export const Title: React.FC<Props> = ({ title }) => {
  return (
    <Text style={styles.title}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: colors.heading,
    textAlign: 'center',
    marginTop: 38,
    marginBottom: 20,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
});

