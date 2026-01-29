import { createTheming } from '@callstack/react-theme-provider';

export const theme = {
    colors: {
        primary: '#F83758',
        secondry: '#000000',
        gray: '#A8A8A9',
        lightGray: '#575757',
        grayOpacity: '#F3F3F3F3',
        white: '#FFFFFF',
    
    },
    fonts: {
        regular: 'MontserratRegular',
        semiBold: 'MontserratSemiBold',
        bold: 'MontserratBold',
    },


};

export const { ThemeProvider, withTheme, useTheme } = createTheming(theme);