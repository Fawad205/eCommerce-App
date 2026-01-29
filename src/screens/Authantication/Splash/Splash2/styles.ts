import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../../components/theme';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16, 
  },

  imageContainer: {
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    top:'25%',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  title: {
    top: '5%',
    fontSize: 24,
    fontFamily: 'MontserratExtraBold',
    textAlign: 'center',
    marginTop: 10,
  },

  discription: {
    fontSize: 14,
    top: '5%',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 6,
    color: theme.colors.gray,
    fontFamily: theme.fonts.semiBold,
  },

  pageCount: {
    position: 'absolute',
    top: 16,
    left: 16,
    fontSize: 14,
    color: '#999',
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
    top: height * 0.36,
  },

  dot: {
    width: 14,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
  },

  btn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },

  btnTxt: {
    fontSize: 18,
    fontFamily: theme.fonts.semiBold,
    fontWeight: '600',
    color: theme.colors.primary,
  },

  btnPrev: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },

  

  PrevbtnTxt: {
    fontSize: 16,
    color: theme.colors.gray,
    fontFamily: theme.fonts.semiBold,
  },

  skipBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
  },

  skipTxt: {
    fontSize: 16,
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.secondry,
  },
});
