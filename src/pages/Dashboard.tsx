import React, { useState } from 'react';
import {
  VStack,
  Box,
  useDisclosure,
  IconButton,
  Spinner,
} from '@chakra-ui/react';
import { Sidebar } from '../components/Sidebar';
import { CountriesTable } from '../components/CountriesTable';
import TotalPopulation from '../components/TotalPopulation';
import PopulationBarChart from '../components/PopulationBarChart';
import { useFetchEUCountries } from '../api/countries';
import '../App.css';
import SearchBar from '../components/SearchBar';
import DarkModeSwitch from '../components/DarkModeSwitch';
import { FiMenu } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isOpen, onToggle } = useDisclosure();
  const {
    data: countriesData,
    isLoading: isLoadingCountries,
    isError,
  } = useFetchEUCountries();

  if (isLoadingCountries) {
    return <Spinner />;
  }

  if (isError || !countriesData) {
    return <Box>Error fetching countries</Box>;
  }

  const totalPopulation = countriesData.reduce(
    (acc, country) => acc + country.population,
    0
  );

  const barChartData = countriesData
    .sort((a, b) => b.population - a.population)
    .slice(0, 7)
    .map((country) => ({
      name: country.name.common,
      population: country.population,
    }));

  const filteredCountries = searchTerm
    ? countriesData.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : countriesData;

  return (
    <Box className='dashboard-container'>
      <IconButton
        icon={<FiMenu />}
        onClick={onToggle}
        aria-label='Open Menu'
        position='fixed'
        top='1rem'
        left='1rem'
        zIndex='20'
      />
      <Sidebar isOpen={isOpen} onToggle={onToggle} />
      <Box className='top-bar'>
        <Box width='2.5rem' height='2.5rem' />
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <DarkModeSwitch />
      </Box>
      <VStack className='vStack-container'>
        <Box className='total-population'>
          <TotalPopulation total={totalPopulation} />
        </Box>
        <Box className='bar-chart'>
          {!isLoadingCountries && <PopulationBarChart data={barChartData} />}
        </Box>
        <Box className='countries-table'>
          <CountriesTable countries={filteredCountries} />
        </Box>
      </VStack>
    </Box>
  );
};

export default Dashboard;
