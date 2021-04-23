import React from 'react';

import { Text, StyleSheet, View, Image, Platform } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Title } from '../Title';

interface Props {
  name: string;
  img?: string;
}

export const Header: React.FC<Props> = ({ name, img }) => {
  return (
    <View style={styles.container}>
      <Title title={`Olá,\n${name}`} isLeft />

      <Image style={styles.img} source={{ uri: 'https://scontent.fgyn1-1.fna.fbcdn.net/v/t1.6435-9/175051713_5983773841648940_4396016757082262061_n.jpg?_nc_cat=100&_nc_map=test-rt&ccb=1-3&_nc_sid=730e14&_nc_ohc=At1LtGVk5n0AX9FzGfJ&_nc_ht=scontent.fgyn1-1.fna&oh=e7fbe8642af3a9d3cdaae08585350e8b&oe=60A78F68' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: Platform.OS === 'ios' ? 38 : 10,
    paddingBottom: 20,
    paddingHorizontal: 12,
    width: '100%',
  },
  name: {
    fontSize: 18,
    color: colors.heading,
    textAlignVertical: 'center',
    textAlign: 'left',
    fontFamily: fonts.text,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 40,
  },
});

