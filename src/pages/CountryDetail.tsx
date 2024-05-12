import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchCountryDetail } from '../api/countries';
import {
  Box,
  Text,
  Image,
  VStack,
  Spinner,
  Alert,
  AlertIcon,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';

export const CountryDetail = () => {
  const { code } = useParams<{ code?: string }>();

  console.log('Country code received:', code);

  const { data: country, isLoading, error } = useFetchCountryDetail(code);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error.message}
      </Alert>
    );
  }

  if (!country) {
    return (
      <Alert status="info">
        <AlertIcon />
        No country found or data is incomplete.
      </Alert>
    );
  }

  return (
    <Box p={5}>
      <Heading as="h1" mb={4}>
        Country Details
      </Heading>
      <VStack spacing={4} align="stretch">
        <Image
          borderRadius="full"
          boxSize="150px"
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
        />
        <SimpleGrid columns={2} spacing={10}>
          <Text>
            <b>Official Name:</b> {country.name.official}
          </Text>
          <Text>
            <b>Common Name:</b> {country.name.common}
          </Text>
          {/* Further details as needed */}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
