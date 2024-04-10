import { Box, Text } from '@chakra-ui/react';

interface TotalPopulationProps {
  total: number;
}

const TotalPopulation: React.FC<TotalPopulationProps> = ({ total }) => {
  return (
    <Box p={5} shadow='md' borderWidth='1px'>
      <Text fontSize='xl'>Total Population in Europe</Text>
      <Text fontSize='2xl'>{total.toLocaleString()}</Text>
    </Box>
  );
};

export default TotalPopulation;
