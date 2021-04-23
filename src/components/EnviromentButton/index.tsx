import React from 'react';

import { Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  title: string;
  active?: boolean;
}

export const EnviromentButton: React.FC<Props> = ({ title, active = false, ...rest }) => {
  return (
    <RectButton {...rest} style={[styles.button, active && styles.buttonActive]}>
      <Text style={[styles.title, active && styles.titleActive]}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.shape,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    marginRight: 8,
    paddingHorizontal: 8,
    paddingVertical: 7,
    height: 40,
    width: 76,
  },
  buttonActive: {
    backgroundColor: colors.green_light,
  },
  title: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  titleActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  },
});

