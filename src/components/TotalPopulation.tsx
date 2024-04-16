//TotalPopulation
import { Box, Text } from '@chakra-ui/react';

interface TotalPopulationProps {
  total: number;
}

const TotalPopulation: React.FC<TotalPopulationProps> = ({ total }) => {
  return (
    <div className='total-population'>
      <Box p={10} shadow='md' borderWidth='1px'>
        <Text fontSize='xl'>Total Population in Europe</Text>
        <Text fontSize='2xl'>{total.toLocaleString()}</Text>
      </Box>
    </div>
  );
};

export default TotalPopulation;
