import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './pages/Dashboard';
import { CountryDetail } from './pages/CountryDetail';
import theme from './theme/theme';

const queryClient = new QueryClient();

const rootLoader = async () => {
  return Dashboard;
};

const countryLoader = async () => {
  return CountryDetail;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    loader: rootLoader,
  },
  {
    path: 'country/:countryCode',
    element: <CountryDetail />,
    loader: countryLoader,
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
