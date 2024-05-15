import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './pages/Dashboard';
import CountryDetail from './pages/CountryDetail';
import ErrorBoundary from './ErrorBoundary';
import theme from './theme/theme';

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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
