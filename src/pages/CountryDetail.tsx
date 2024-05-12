import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useFetchCountryDetail } from '../api/countries';

export const CountryDetail = (): JSX.Element => {
  const { code } = useParams<{ code?: string }>();
  const { data: country, isLoading, error } = useFetchCountryDetail(code);

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error.message || 'Failed to fetch country details'}
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (!country || !country.name || !country.flags) {
    return (
      <Alert status="info">
        <AlertIcon />
        No country found or incomplete data received.
      </Alert>
    );
  }

  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">
          {country.name.common || 'Country Name Not Available'}
        </Heading>
        <Image
          borderRadius="full"
          boxSize="150px"
          src={country.flags.svg}
          alt={`Flag of ${country.name.common || 'Unavailable'}`}
        />
        {country.capital && (
          <Text fontSize="2xl" fontWeight="bold" mt={2}>
            Capital: {country.capital[0] || 'No Capital'}
          </Text>
        )}
        {country.population && (
          <Text fontSize="xl">
            Population: {country.population.toLocaleString()}
          </Text>
        )}
        {country.region && (
          <Text fontSize="md">
            Region: {country.region} - {country.subregion}
          </Text>
        )}
      </VStack>
    </Box>
  );
};
