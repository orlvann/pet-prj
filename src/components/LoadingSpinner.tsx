import React from 'react';
import { BounceLoader } from 'react-spinners';
import { Box } from '@chakra-ui/react';

const LoadingSpinner: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <BounceLoader color="#2d3748" size={60} />
    </Box>
  );
};

export default LoadingSpinner;
