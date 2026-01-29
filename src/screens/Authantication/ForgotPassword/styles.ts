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
   
    txt:{
      color: theme.colors.lightGray,
      fontFamily: theme.fonts.regular,
      paddingHorizontal:21,
      paddingVertical:10,    
      fontSize: 12      
    },
})