import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  light: {
    text: 'gray.800',
    background: 'gray.50',
  },
  dark: {
    text: 'gray.50',
    background: 'gray.800',
  },
};

const theme = extendTheme({ config, colors });

export default theme;
