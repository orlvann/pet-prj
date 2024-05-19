import React from 'react';
import { Flex, Text, useColorMode } from '@chakra-ui/react';
import { FiSun } from 'react-icons/fi';

const Logo: React.FC = () => {
  const { colorMode } = useColorMode();
  const color = colorMode === 'dark' ? 'gray.50' : 'gray.800';

  return (
    <Flex align="center">
      <FiSun size="35px" color={color} />
      <Text ml="2" fontSize="2xl" fontWeight="bold" color={color}>
        Countries
      </Text>
    </Flex>
  );
};

export default Logo;
