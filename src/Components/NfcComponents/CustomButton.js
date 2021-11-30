import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, size, WP} from '../../Utilities';

const CustomButton = ({onPress, Title, containerStyles}) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, containerStyles]}
      onPress={onPress}>
      <Text style={styles.buttonTextStyle}>{Title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  mainContainer: {
    height: WP('10'),
    width: WP('90'),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: WP('5'),
  },
  buttonTextStyle: {
    fontSize: size.xxlarge,
    fontWeight: 'bold',
    color: colors.white,
  },
});
