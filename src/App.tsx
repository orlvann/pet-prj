import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  ChakraProvider,
  ColorModeScript,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';
import Dashboard from './pages/Dashboard';
import CountryDetail from './pages/CountryDetail';
import ErrorBoundary from './ErrorBoundary';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import theme from './theme/theme';
import './App.css';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/country/:countryCode',
    element: <CountryDetail />,
    errorElement: <ErrorBoundary />,
  },
]);

const App: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();

  useEffect(() => {
    document.body.setAttribute('data-theme', colorMode);
  }, [colorMode]);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <div className="app-container">
          <Sidebar isOpen={isOpen} onToggle={onToggle} />
          <div className={`main-content ${isOpen ? 'sidebar-open' : ''}`}>
            <Header toggleSidebar={onToggle} />
            <RouterProvider router={router} />
          </div>
        </div>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
