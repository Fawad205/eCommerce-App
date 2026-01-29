import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../components/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    padding: 35, 
  },

  heading:{
   width: '60%'
  },
   headingTxt:{
      fontSize: 36,
      fontFamily: theme.fonts.bold,
      color: theme.colors.secondry,
   },
   
   linksContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  txtAbove: {
    color: theme.colors.lightGray,
    fontFamily: theme.fonts.regular,
    fontSize: 14,
  },

  txt: {
    color: theme.colors.secondry,
    fontFamily: theme.fonts.regular,
    paddingHorizontal: 8,
    paddingVertical: 10,
    fontSize: 12,
  },

  txtSign: {
    paddingVertical: 5,
    fontFamily: theme.fonts.semiBold,
    textDecorationLine: 'underline',
    fontSize: 16,
    color: theme.colors.primary,
  },
})