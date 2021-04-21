import React from 'react';

import { View, Text, StyleSheet, TextInput, TextInputProps } from 'react-native';
import colors from '../../styles/colors';

interface Props extends TextInputProps {
  error: boolean;
}

const Input: React.FC<Props> = ({ error, ...rest }) => {
  return (
    <TextInput {...rest} style={[styles.input, error && { borderColor: colors.red }]} />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 56,
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: 250,
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Input;
