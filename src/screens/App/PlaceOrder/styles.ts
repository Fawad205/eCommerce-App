import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../components/theme';


export const styles = StyleSheet.create({
    container:{
        padding:20,
    },

    bagContainer:{
        flexDirection:'row',
        paddingVertical:30,
        gap:20
    },
    txtContainer:{
        width:'60%'
    },
    divider: {
    
    height: 1,
    backgroundColor: '#CACACA', // line color
    width: '100%',
    marginVertical: 20,         // space top/bottom
  },
})