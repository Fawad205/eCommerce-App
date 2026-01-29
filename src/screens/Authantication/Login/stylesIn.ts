import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../components/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    padding: 35,
    position: 'relative',
  },


  heading: {
    width: '60%',
  },
  headingTxt: {
    fontSize: 36,
    fontFamily: theme.fonts.bold,
    color: theme.colors.secondry,
  },

  forgotPassword: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.regular,
  },

  loginBtnTxt: {
    color: theme.colors.white,
    fontFamily: theme.fonts.semiBold,
    fontSize: 20,
  },

  linksContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 60,
  },
  txtAbove: {
    color: theme.colors.lightGray,
    fontFamily: theme.fonts.regular,
    padding: 0,
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
});
