import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../components/theme';


export const styles = StyleSheet.create({
    conteiner:{
        padding:20,
    },
    hrader:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    swiper:{
        
        marginVertical:20
    },

    sizesBtn: {
  borderWidth: 1,
  borderColor: theme.colors.primary,
  borderRadius: 5,
  width: 60,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 7,
},

selectedSizeBtn: {
  backgroundColor: '#FA7189',
},

btns:{
    flexDirection:'row',
    gap:10,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    padding:5,
    borderRadius:5,
},
delivery:{
    backgroundColor:'#FFCCD5',
    padding:15,
    borderRadius:10,
    marginVertical:10,   
},

similerBtn:{
    flexDirection:'row',
    gap:10,
    borderRadius:5,
    padding:10,
    backgroundColor:theme.colors.white,
    width:180
},

 featuredSection:{
      
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
       
    },
    featuredText:{

        fontSize:18,
        fontFamily:theme.fonts.semiBold,
        color:theme.colors.secondry,
        alignSelf:'flex-start',
    }
    ,
    sort:{
        flexDirection:'row',
        gap:2,
        backgroundColor:theme.colors.white,
        padding:5,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    
    filter:{
        flexDirection:'row',
        gap:2,
        backgroundColor:theme.colors.white,
        padding:5,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
 

    
})