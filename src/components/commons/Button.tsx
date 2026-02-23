import { StyleSheet, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { theme } from '../theme';

type ButtonProps = {
  text?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function Button({ text, onPress, style }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.loginBtnTxt}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: theme.colors.primary,
    height: 55,
    width: 'auto',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  loginBtnTxt: {
    color: theme.colors.white,
    fontFamily: theme.fonts.semiBold,
    fontSize: 20,
  },
});
