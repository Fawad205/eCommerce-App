import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../components/theme';


export const styles = StyleSheet.create({

    container:{
        padding:20,
        backgroundColor:theme.colors.white,
    },
    changePasswordText:{
        fontFamily:theme.fonts.regular,fontSize:16,color:theme.colors.primary,textDecorationLine:'underline',
        flex:1,
        textAlign:'right',
    },
    
  divider: {
    
    height: 1,
    backgroundColor: '#E0E0E0', // line color
    width: '100%',
    marginVertical: 20,         // space top/bottom
  },

})