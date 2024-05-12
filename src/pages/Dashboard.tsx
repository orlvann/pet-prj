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
import Banner from '../components/BannerPopulation';
import PopulationBarChart from '../components/BarChart';
import { Country, useFetchEUCountries } from '../api/countries';
import '../App.css';
import SearchBar from '../components/SearchBar';
import DarkModeSwitch from '../components/DarkModeSwitch';
import { FiMenu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import AreaBanner from '../components/BannerArea';

interface IData {
  lp: number;
  code: string;
  name: string;
  flag: string;
  capital: string;
  population: number;
  independent: boolean;
  area: number;
}

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

  const mappedData = countriesData?.map((country, index) => ({
    lp: index,
    name: country.name.common,
    flag: country.flags.png,
    capital: country.capital.join(', '),
    population: country.population,
    independent: country.independent,
    area: country.area,
  })) as IData[];

  const columns: TableColumn[] = [
    {
      key: 'lp',
      fieldName: 'lp',
      name: 'LP',
    },
    {
      key: 'name',
      fieldName: 'name',
      name: 'Name',
    },
    {
      key: 'flag',
      fieldName: 'flag',
      name: 'Flag',
      onRender(item: IData) {
        return <Image src={item.flag} alt="Flag" height="20px" />;
      },
    },
    {
      key: 'capital',
      fieldName: 'capital',
      name: 'Capital',
    },
    {
      key: 'population',
      fieldName: 'population',
      name: 'Population',
    },
    {
      key: 'independent',
      fieldName: 'independent',
      name: 'Independent',
      onRender(item: IData) {
        return (
          <Button
            size="sm"
            colorScheme={item.independent ? 'gray' : 'gray'}
            variant={colorMode === 'dark' ? 'solid' : 'outline'}
            isDisabled={true}
            _disabled={{
              bg: item.independent
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
            {item.independent ? 'True' : 'False'}
          </Button>
        );
      },
    },
  ];

  if (isLoadingCountries) return <Spinner />;
  if (isError || !mappedData) return <Box>Error fetching countries</Box>;

  const handleOnRowClick = (country: Country) =>
    navigate(`/country/${country.cca3}`);

  const filteredData = mappedData.filter(
    (item) =>
      !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPopulation = filteredData.reduce(
    (acc, country) => acc + country.population,
    0
  );

  const totalArea = filteredData.reduce(
    (acc, country) => acc + country.area,
    0
  );
  const barChartData = filteredData
    .sort((a, b) => b.population - a.population)
    .slice(0, 7)
    .map((item) => ({
      name: item.name,
      population: item.population,
    }));

  return (
    <Box className="dashboard-container">
      <IconButton
        icon={<FiMenu />}
        onClick={onToggle}
        aria-label="Open Menu"
        position="fixed"
        top="1rem"
        left="1rem"
        zIndex="20"
      />
      <Sidebar isOpen={isOpen} onToggle={onToggle} />
      <Flex
        as="header"
        w="full"
        justifyContent="space-between"
        alignItems="center"
        p={5}
        bg={bgColor}
        borderBottom="1px"
        borderColor={borderColor}
        zIndex="10"
        position="fixed"
        top="0"
        left="0"
        right="0"
      >
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <Box flex="1" textAlign="right">
          <DarkModeSwitch />
        </Box>
      </Flex>
      <VStack className="vStack-container">
        <Box
          bg={bgColor}
          borderColor={borderColor}
          className="total-population"
        >
          <Banner data={[{ population: totalPopulation }]} />
          <Box
            bg={bgColor}
            borderColor={borderColor}
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            px="20px"
            py="10px"
          >
            <AreaBanner data={[{ area: totalArea }]} />
          </Box>
        </Box>
        <Box className="bar-chart">
          {!isLoadingCountries && <PopulationBarChart data={barChartData} />}
        </Box>
        <Box className="table">
          <Table
            columns={columns}
            data={filteredData ?? []}
            onRowClick={handleOnRowClick}
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default Dashboard;
