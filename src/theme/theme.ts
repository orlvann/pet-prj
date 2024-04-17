// theme.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  useSystemColorMode: false,
};

const colors = {
  light: {
    text: 'gray.800',
    background: 'gray.50',
    // ... other colors for light mode
  },
  dark: {
    text: 'whiteAlpha.900',
    background: 'gray.800',
    // ... other colors for dark mode
  },
};

const theme = extendTheme({ config, colors });

export default theme;
