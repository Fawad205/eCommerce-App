import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../components/theme';
import SvgIcon from '../../../assets/svgs/SvgIcon';


export const styles = StyleSheet.create({
    container:{
        
        padding:20,
        
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        height: 60,
        paddingHorizontal: 15,
    },
    inputField: {
        flex: 1,
        fontSize: 18,
        marginLeft: 8,
        color: '#000',
    },
    header:{
       
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: Dimensions.get('window').width - 40,
        marginBottom:20,
    },
    headerImage: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
    },
    featuredSection:{
      
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:10,
        marginTop:10,
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
 

    swiper:{},
})