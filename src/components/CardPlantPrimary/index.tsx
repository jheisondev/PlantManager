import React from 'react';

import { Text, StyleSheet, Image, Dimensions } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { SvgFromUri } from 'react-native-svg';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface Props extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    about: string;
  }
}

export const CardPlantPrimary: React.FC<Props> = ({ data, ...rest }) => {

  return (
    <RectButton {...rest} style={styles.button}>
      <SvgFromUri uri={data.photo} style={styles.img} />
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.subTitle}>{data.about}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  button: {
    height: '50%',
    width: Dimensions.get('window').width * 0.7,
    backgroundColor: colors.shape,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 10,
    marginTop: 100,
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  img: {
    position: 'absolute',
    zIndex: 100,
    top: -100,
    height: 150,
    width: 150,
  },
  title: {
    fontSize: 26,
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginTop: 16,
    marginBottom: 8,
  },
  subTitle: {
    color: colors.gray,
    fontFamily: fonts.text,
    marginBottom: 8,
  },
});

