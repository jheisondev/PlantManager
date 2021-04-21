import React from 'react';

import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import colors from '../../styles/colors';

interface Props extends TouchableOpacityProps {
  title?: string;
  nameIcon?: string;
}

export const Button: React.FC<Props> = ({ title, nameIcon, ...rest }) => {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.8} style={styles.button}>
      {title && (
        <Text style={styles.title}>{title}</Text>
      )}
      {nameIcon && (
        <Ionicons name={nameIcon ? nameIcon : "airplane"} size={26} color={colors.white} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    textAlignVertical: 'center',
  },
});

