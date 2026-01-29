import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../components/theme';


export const styles = StyleSheet.create({
  container: {
    flex:1,
    
  },
    image:{
      flex: 1,
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 30,
    },

  txtContainer:{
    width: Dimensions.get('window').width * 0.7,
},
txt:{
    fontSize:34,
    fontFamily:theme.fonts.semiBold,
    color:theme.colors.white,
    textAlign: 'center',
    marginBottom: 8,
},
txtBelow:{
    color:theme.colors.white,
    textAlign: 'center',
    marginBottom: 12,
},
button:{
  alignSelf: 'center'
}
})