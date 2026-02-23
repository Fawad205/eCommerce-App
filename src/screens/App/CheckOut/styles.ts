import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../components/theme';


export const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
     divider: {
    
    height: 1,
    backgroundColor: '#E0E0E0', // line color
    width: '100%',
    marginVertical: 20,         // space top/bottom
  },

  addressContainer:{
    width:'80%',
    backgroundColor:theme.colors.white,
    padding:5,
    borderRadius:8,
    gap:5,
    marginRight:10,
  },
  addAddressBtn:{
    backgroundColor:theme.colors.white,
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    height:105,
    width:65,
    borderRadius:8,
    
  },
})