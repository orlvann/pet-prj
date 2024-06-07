import React, { useState, useMemo, useEffect } from 'react';
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
import { Table, TableColumn } from '../components/Table';
import Banner from '../components/BannerPopulation';
import PopulationBarChart from '../components/BarChart';
import { useFetchEUCountries } from '../api/countries';
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
  const [sortConfig, setSortConfig] = useState<{
    key: keyof IData;
    direction: 'asc' | 'desc';
  } | null>(null);

  // Memoize mapped data
  const mappedData = useMemo(() => {
    if (!countriesData) return [];
    return countriesData.map((country, index) => ({
      lp: index,
      code: country.cca3,
      name: country.name.common,
      flag: country.flags?.png,
      capital: country.capital.join(', '),
      population: country.population,
      independent: country.independent,
      area: country.area,
    })) as IData[];
  }, [countriesData]);

  useEffect(() => {
    console.log('Mapped Data:', mappedData);
  }, [mappedData]);

  const sortedData = useMemo(() => {
    if (!sortConfig) return mappedData;
    const sorted = [...mappedData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
    console.log('Sorted Data:', sorted);
    return sorted;
  }, [mappedData, sortConfig]);

  const filteredData = useMemo(() => {
    const data = sortedData.filter(
      (item) =>
        !searchTerm ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Filtered Data:', data);
    return data;
  }, [sortedData, searchTerm]);

  const handleSortChange = (
    ev: React.MouseEvent<HTMLElement>,
    column: TableColumn
  ) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (
      sortConfig &&
      sortConfig.key === column.fieldName &&
      sortConfig.direction === 'asc'
    ) {
      direction = 'desc';
    }
    console.log(`Sorting by ${column.fieldName} in ${direction} order`);
    setSortConfig({ key: column.fieldName as keyof IData, direction });
  };

  const handleOnRowClick = (country: IData) => {
    console.log('Navigating to country with code:', country.code);
    navigate(`/country/${country.code}`);
  };

  const totalPopulation = useMemo(() => {
    const total = filteredData.reduce(
      (acc, country) => acc + country.population,
      0
    );
    console.log('Total Population:', total);
    return total;
  }, [filteredData]);

  const totalArea = useMemo(() => {
    const total = filteredData.reduce((acc, country) => acc + country.area, 0);
    console.log('Total Area:', total);
    return total;
  }, [filteredData]);

  const barChartData = useMemo(() => {
    const data = filteredData
      .sort((a, b) => b.population - a.population)
      .slice(0, 7)
      .map((item) => ({
        name: item.name,
        population: item.population,
      }));
    console.log('Bar Chart Data:', data);
    return data;
  }, [filteredData]);

  const columns: TableColumn[] = [
    { key: 'lp', fieldName: 'lp', name: 'LP', onColumnClick: handleSortChange },
    {
      key: 'name',
      fieldName: 'name',
      name: 'Name',
      onColumnClick: handleSortChange,
    },
    {
      key: 'flag',
      fieldName: 'flag',
      name: 'Flag',
      onRender: (item: IData) => (
        <Image src={item.flag} alt="Flag" height="20px" width="30px" />
      ),
      onColumnClick: handleSortChange,
    },
    {
      key: 'capital',
      fieldName: 'capital',
      name: 'Capital',
      onColumnClick: handleSortChange,
    },
    {
      key: 'population',
      fieldName: 'population',
      name: 'Population',
      onColumnClick: handleSortChange,
    },
    {
      key: 'independent',
      fieldName: 'independent',
      name: 'Independent',
      onRender: (item: IData) => (
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
      ),
      onColumnClick: handleSortChange,
    },
  ];

  columns.forEach((column) => {
    if (sortConfig && column.fieldName === sortConfig.key) {
      column.isSorted = true;
      column.isSortedDescending = sortConfig.direction === 'desc';
    } else {
      column.isSorted = false;
      column.isSortedDescending = false;
    }
  });

  if (isLoadingCountries) return <Spinner />;
  if (isError || !mappedData) return <Box>Error fetching countries</Box>;

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
