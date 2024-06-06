import { useParams } from 'react-router-dom';
import {
  Box,
  Image,
  Text,
  Heading,
  VStack,
  IconButton,
  Flex,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { Country } from '../api/countries';
import { Sidebar } from '../components/Sidebar';
import DarkModeSwitch from '../components/DarkModeSwitch';
import { FiMenu } from 'react-icons/fi';
import '../App.css';
import LoadingSpinner from '../components/LoadingSpinner';

const renderCountryDetail = (country: Country) => {
  return Object.entries(country).map(([key, value]) => {
    if (
      value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      !(value instanceof Date)
    ) {
      return (
        <Box key={key}>
          <Heading as="h3" size="md">
            {key}
          </Heading>
          {renderCountryDetail(value)}
        </Box>
      );
    }

    if (Array.isArray(value)) {
      return (
        <Text key={key}>
          {key}: {value.join(', ')}
        </Text>
      );
    }

    if (value instanceof Date) {
      return (
        <Text key={key}>
          {key}: {value.toDateString()}
        </Text>
      );
    }

    return (
      <Text key={key}>
        {key}: {value.toString()}
      </Text>
    );
  });
};

export const CountryDetail = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const { colorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  const {
    data: countryData,
    isLoading,
    isError,
    error,
  } = useQuery<Country[], Error>(
    ['country', countryCode],
    () =>
      fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`).then((res) =>
        res.json()
      ),
    {
      enabled: !!countryCode,
    }
  );

  if (isLoading) return <LoadingSpinner />;
  if (isError || !countryData)
    return (
      <Box>An error occurred: {error?.message || 'Country not found'}</Box>
    );

  const country = countryData[0];

  return (
    <Flex direction="column" align="center" h="100vh">
      <Flex
        w="full"
        justifyContent="space-between"
        p={5}
        bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      >
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
        <Box width="2.5rem" height="2.5rem" />
        <DarkModeSwitch />
      </Flex>
      {country && (
        <VStack spacing={4} align="center" w="full" p={4}>
          <Heading as="h2" size="xl">
            {country.name.official}
          </Heading>
          <Image
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            boxSize="100px"
          />
          <VStack align="center" spacing={4} w="full">
            {renderCountryDetail(country)}
          </VStack>
        </VStack>
      )}
    </Flex>
  );
};
export default CountryDetail;
