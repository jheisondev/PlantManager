import React from 'react';

import { Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface Props {
  title: string;
  isLeft?: boolean;
}

export const Title: React.FC<Props> = ({ title, isLeft }) => {
  return (
    <Text style={[styles.title, isLeft && { textAlign: 'left' }]}>
      {`${title.substring(0, 20)}...`}
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

