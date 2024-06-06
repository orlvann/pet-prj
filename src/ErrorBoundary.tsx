// src/ErrorBoundary.tsx
import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';

function ErrorBoundary() {
  const error = useRouteError();

  const getErrorDetails = (error: unknown): string => {
    if (typeof error === 'string') {
      return error;
    } else if (error instanceof Error) {
      return error.stack || error.message || 'An unknown error occurred';
    }
    return 'An unexpected error type';
  };

  console.error('Error caught by ErrorBoundary:', error);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.100"
      p={5}
    >
      <VStack
        spacing={6}
        bg="white"
        p={10}
        borderRadius="md"
        boxShadow="md"
        textAlign="center"
        width={{ base: '90%', sm: '80%', md: '60%', lg: '50%' }} // Adjusting width for responsiveness
        maxW="900px" // Maximum width to avoid overly large boxes on very large screens
      >
        <Heading as="h1" size="xl" color="red.500">
          Oops! Something went wrong.
        </Heading>
        <Text fontSize="lg">
          We're sorry, but something went wrong while loading the page.
        </Text>
        <Box whiteSpace="pre-wrap" textAlign="left" width="100%">
          <Text as="pre" fontSize="sm" color="gray.500">
            {getErrorDetails(error)}
          </Text>
        </Box>
        <Button colorScheme="blue" onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </VStack>
    </Box>
  );
}

export default ErrorBoundary;
