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
 

    dealOfDaySection:{
        backgroundColor:'#4392F9',
        borderRadius:10,
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
    },
    dealtime:{
        flexDirection:'row',
        gap:5,
    },
    dealOfDayText:{
        paddingVertical:5,
        fontSize:18,
        fontFamily:theme.fonts.semiBold,
        color:theme.colors.white,
        
    },
    viewallbtn:{
        borderWidth:1,
        borderColor:theme.colors.white,
        borderRadius:5,
        padding:5,
        flexDirection:'row',
        gap:8,        
    },
    viewallTxt:{
        color:theme.colors.white,
        fontFamily:theme.fonts.semiBold,
        fontSize:12,

    },

    offerContainer:{
        flexDirection:'row',
        gap:25,
        backgroundColor:'#ffff',
        borderRadius:10
    },
    offerTxtContainer:{
        width:200,
       gap:5,
       
    },

    // Flate and heel
   
  flatAndHeel: {
    marginTop: 20,
    width: '100%',
    height: 220,
    backgroundColor: '#fff',
    position: 'relative', 
    overflow: 'hidden',
  },

  bgLayer: {
    ...StyleSheet.absoluteFillObject, // full cover
  },

  liner: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    resizeMode: 'contain',
  },

  stars: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    resizeMode: 'contain',
  },

  heels: {
    position: 'absolute',
    left: 20,
    top: '18%',
    width: 140,
    height: 180,
    resizeMode: 'contain',
  },

  content: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 24,
  },

  title: {
    right:45,
    fontSize: 20,
    fontFamily:theme.fonts.semiBold,
    color: '#000',
  },

  subTitle: {
    fontSize: 14,
    fontFamily:theme.fonts.regular,
    color:'#000000',
    marginVertical: 2,
  },

  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal:12,
    paddingVertical: 5,
    borderRadius: 6,
    // marginTop: 10,
    flexDirection:'row',
    gap:5
  },

  buttonText: {
    color: '#ffffff',
    fontFamily:theme.fonts.regular,
    fontSize:16
  },




    // TrendingProducts
    trendingProductSection:{
        backgroundColor:'#FD6E87',
        borderRadius:10,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
    },

    hotSale:{
        backgroundColor:theme.colors.white,
        marginBottom:25
    },

    sponserd:{
        
        backgroundColor:theme.colors.white,

    },

    
})