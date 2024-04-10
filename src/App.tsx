// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './pages/Dashboard';
import CountryDetail from './pages/CountryDetail';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/country/:name' element={<CountryDetail />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
