// index.tsx
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App';
import theme from './theme/theme'; // Ensure you import your theme with the color mode config

const container = document.getElementById('root');

if (!container) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(container);

root.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </>
);
