import { useParams } from 'react-router-dom';
import {
  Box,
  Image,
  Text,
  Spinner,
  Heading,
  VStack,
  IconButton,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { Country } from '../api/countries';
import { Sidebar } from '../components/Sidebar';
import { FiMenu } from 'react-icons/fi';
import '../App.css';

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

  if (isLoading) return <Spinner />;
  if (isError || !countryData)
    return (
      <Box>An error occurred: {error?.message || 'Country not found'}</Box>
    );

  const country = countryData[0];

  return (
    <Flex w="full" justifyContent="space-between" p={5}>
      <IconButton
        icon={<FiMenu />}
        onClick={onToggle}
        aria-label="Open Menu"
        position="fixed"
        top="80px"
        left="1rem"
        zIndex="20"
      />
      <Sidebar isOpen={isOpen} onToggle={onToggle} />

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
