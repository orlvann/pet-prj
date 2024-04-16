import { useParams } from 'react-router-dom';
import { Box, Image, Text, Spinner, Heading, VStack } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { Country } from '../api/countries';

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
          <Heading as='h3' size='md'>
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

  const country = countryData && countryData[0];

  if (isLoading) return <Spinner />;
  if (isError || !country)
    return (
      <Box>An error occurred: {error?.message || 'Country not found'}</Box>
    );

  return (
    <Box p={4}>
      <Heading as='h2' size='xl' mb={4}>
        {country.name.official}
      </Heading>
      <Image
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        boxSize='100px'
      />
      <VStack align='start' spacing={4}>
        {renderCountryDetail(country)}
      </VStack>
    </Box>
  );
};
