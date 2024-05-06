import React, { useState } from 'react';
import {
  VStack,
  Box,
  useDisclosure,
  IconButton,
  Spinner,
  Flex,
  useColorMode,
  Image,
  Switch,
} from '@chakra-ui/react';
import { Sidebar } from '../components/Sidebar';
import { Table, TableColumn } from '../components/Table'; // Use the new Table component
import TotalPopulation from '../components/TotalPopulation';
import PopulationBarChart from '../components/PopulationBarChart';
import { useFetchEUCountries } from '../api/countries';
import '../App.css';
import SearchBar from '../components/SearchBar';
import DarkModeSwitch from '../components/DarkModeSwitch';
import { FiMenu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { isOpen, onToggle } = useDisclosure();
  const {
    data: countriesData,
    isLoading: isLoadingCountries,
    isError,
  } = useFetchEUCountries();
  const { colorMode } = useColorMode();

  const bgColor = colorMode === 'dark' ? 'gray.800' : 'white';
  const borderColor = colorMode === 'dark' ? 'gray.700' : 'gray.200';

  if (isLoadingCountries) {
    return <Spinner />;
  }

  if (isError || !countriesData) {
    return <Box>Error fetching countries</Box>;
  }

  const columns: TableColumn[] = [
    {
      header: 'Name',
      accessor: 'name.common',
      isSortable: true,
    },
    {
      header: 'Flag',
      accessor: 'flags.png',
      render: (item) => (
        <Image
          src={item.flags.png}
          alt={`Flag of ${item.name.common}`}
          boxSize='30px'
        />
      ),
    },
    {
      header: 'Capital',
      accessor: 'capital',
      render: (item) => item.capital?.join(', '),
      isSortable: true,
    },
    {
      header: 'Population',
      accessor: 'population',
      render: (item) => item.population.toLocaleString(),
      isSortable: true,
    },
    {
      header: 'Independent',
      accessor: 'independent',
      render: (item) => (
        <Switch isChecked={item.independent} isReadOnly={true} />
      ),
    },
  ];

  const tableData = countriesData
    .filter(
      (country) =>
        !searchTerm ||
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((country, index) => ({
      ...country,
      index, // Add index if you want to display row numbers
    }));

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
      <Flex
        as='header'
        w='full'
        justifyContent='space-between'
        alignItems='center'
        p={5}
        bg={bgColor}
        borderBottom='1px'
        borderColor={borderColor}
        zIndex='10'
        position='fixed'
        top='0'
        left='0'
        right='0'
      >
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <Box flex='1' textAlign='right'>
          <DarkModeSwitch />
        </Box>
      </Flex>
      <VStack className='vStack-container'>
        <Box
          bg={bgColor}
          borderColor={borderColor}
          className='total-population'
        >
          <TotalPopulation total={totalPopulation} />
        </Box>
        <Box className='bar-chart'>
          {!isLoadingCountries && <PopulationBarChart data={barChartData} />}
        </Box>
        <Box className='countries-table'>
          <Table
            columns={columns}
            data={tableData}
            onRowClick={(item) => navigate(`/country/${item.cca3}`)}
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default Dashboard;
