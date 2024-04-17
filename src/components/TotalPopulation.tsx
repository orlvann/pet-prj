import { Box, Text } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
interface TotalPopulationProps {
  total: number;
}

const TotalPopulation: React.FC<TotalPopulationProps> = ({ total }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'gray.700' : 'white';
  const borderColor = colorMode === 'dark' ? 'gray.600' : 'gray.200';

  return (
    <div className='total-population'>
      <Box
        bg={bgColor}
        borderColor={borderColor}
        p={10}
        shadow='md'
        borderWidth='1px'
      >
        <Text fontSize='xl'>Total Population in Europe</Text>
        <Text fontSize='2xl'>{total.toLocaleString()}</Text>
      </Box>
    </div>
  );
};

export default TotalPopulation;
