import { Box, Text } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { calculateTotalPopulation } from '../utils/calculations';

export interface BannerProps {
  data: { total: number }[];
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'gray.700' : 'white';
  const textColor = colorMode === 'dark' ? '#e0e0e0' : '#000';
  const totalPopulation = calculateTotalPopulation(data);

  return (
    <div className="total-population">
      <Box bg={bgColor} p={10} borderRadius={'10px'} width={300}>
        <Text fontSize="sm" fontWeight="medium" color="gray.500">
          Total Population in Europe
        </Text>
        <Text fontSize="3xl" fontWeight="bold" color={textColor}>
          {totalPopulation.toLocaleString()}
        </Text>
      </Box>
    </div>
  );
};

export default Banner;
