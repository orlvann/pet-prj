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
  Button,
} from '@chakra-ui/react';
import { Sidebar } from '../components/Sidebar';
import { Table, TableColumn } from '../components/Table'; //
import TotalPopulation from '../components/TotalPopulation';
import PopulationBarChart from '../components/PopulationBarChart';
import { Country, useFetchEUCountries } from '../api/countries';
import '../App.css';
import SearchBar from '../components/SearchBar';
import DarkModeSwitch from '../components/DarkModeSwitch';
import { FiMenu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const {
    data: countriesData,
    isLoading: isLoadingCountries,
    isError,
  } = useFetchEUCountries();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();

  const bgColor = colorMode === 'dark' ? 'gray.800' : 'white';
  const borderColor = colorMode === 'dark' ? 'gray.700' : 'gray.200';

  const columns: TableColumn<Country>[] = [
    {
      header: 'Name',
      accessor: (country) => country.name.common,
    },
    {
      header: 'Flag',
      accessor: (country) => country.flags.png,
      render: (value) => <Image src={value as string} boxSize='30px' />,
    },
    {
      header: 'Capital',
      accessor: (country) => country.capital.join(', '),
    },
    {
      header: 'Population',
      accessor: (country) => country.population.toLocaleString(),
    },
    {
      header: 'Independent',
      accessor: (country) => country.independent,
      render: (value: React.ReactNode, country: Country) => (
        <Button
          size='sm'
          colorScheme={value === 'true' ? 'gray' : 'gray'}
          variant={colorMode === 'dark' ? 'solid' : 'outline'}
          isDisabled={true}
          _disabled={{
            bg: value
              ? colorMode === 'light'
                ? 'gray.700'
                : 'gray.400'
              : colorMode === 'light'
                ? 'gray.400'
                : 'gray.700',
            color: 'white',

            opacity: 1,
          }}
        >
          {value ? 'True' : 'False'}
        </Button>
      ),
    },
  ];

  if (isLoadingCountries) return <Spinner />;
  if (isError || !countriesData) return <Box>Error fetching countries</Box>;

  const handleOnRowClick = (country: Country) =>
    navigate(`/country/${country.cca3}`);
  const filteredData = countriesData.filter(
    (country) =>
      !searchTerm ||
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
        <Box className='table'>
          <Table
            columns={columns}
            data={filteredData}
            onRowClick={handleOnRowClick}
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default Dashboard;
