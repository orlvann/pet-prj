import React from 'react';
import { Flex, Text, useColorMode, Box } from '@chakra-ui/react';
import { FiSun } from 'react-icons/fi';

const Logo: React.FC = () => {
  const { colorMode } = useColorMode();
  const color = colorMode === 'dark' ? 'gray.50' : 'gray.800';
  const bgColor = colorMode === 'dark' ? 'gray.800' : 'white';
  const borderColor = colorMode === 'dark' ? 'gray.700' : 'gray.200';

  return (
    <Box bg={bgColor} borderColor={borderColor} p={4} borderRadius="10px">
      <Flex align="center">
        <FiSun size="35px" color={color} />
        <Text ml="2" fontSize="2xl" fontWeight="bold" color={color}>
          Countries
        </Text>
      </Flex>
    </Box>
  );
};

export default Logo;
