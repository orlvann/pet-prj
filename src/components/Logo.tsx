import React from 'react';
import { Flex, Text, Box, useColorModeValue } from '@chakra-ui/react';
import { FiSun } from 'react-icons/fi';

const Logo: React.FC = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('#000', '#e0e0e0');

  return (
    <Box bg={bgColor} borderColor={borderColor} p={4} borderRadius="10px">
      <Flex align="center">
        <FiSun size="35px" color={bgColor} />
        <Text ml="2" fontSize="2xl" fontWeight="bold" color={textColor}>
          Countries
        </Text>
      </Flex>
    </Box>
  );
};

export default Logo;
