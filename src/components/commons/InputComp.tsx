import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { theme } from '../theme';
import { TextInput } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

type inputProps = {placeholder?: string,placeholderTextColor?: string,icons?: string ,secureTextEntry?: boolean
  ,leftIcon? : React.ReactNode
  ,rightIcon? : React.ReactNode
  value?: string;
  onchangeText?: (text: string) => void;
  error?: string;
  containerStyle?: ViewStyle;
  
};

export default function InputFileds( props: inputProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <>
    <View style={[styles.inputWrapper,{borderColor: isFocused? theme.colors.primary : theme.colors.gray}, props.containerStyle]}>

    {props.leftIcon && (
        <View style={styles.leftIcon}>
          {props.leftIcon}
        </View>
      )}

    <TextInput style={styles.input}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      secureTextEntry={props.secureTextEntry}
      value={props.value}
      onChangeText={props.onchangeText}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  

     {props.rightIcon && (
        <View style={styles.rightIcon}>
          {props.rightIcon}
        </View>
      )}
        </View>

      {props.error ? 
        (
          <Text style={styles.errorText}>{props.error}</Text>
        ): null}
        </>
  )
}

const styles = StyleSheet.create({
  
     inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    height: 60,
    width: 340,
    marginVertical:15,
    paddingHorizontal: 12,
    
    fontSize: 14,

  },

  input: {
    flex: 1,  
    fontSize: 14,
    color: '#000',
      },

  leftIcon: {
    marginRight: 8,
  },

  rightIcon: {
    marginLeft: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },

       
})