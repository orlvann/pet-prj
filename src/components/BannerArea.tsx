import { Box, Text } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { formatValue } from '../utils/formatNumbers';
import { calculations } from '../utils/calculations';
export interface AreaBannerProps {
  data: { area: number }[];
}

const AreaBanner: React.FC<AreaBannerProps> = ({ data }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'gray.700' : 'white';
  const textColor = colorMode === 'dark' ? '#e0e0e0' : '#000';
  const totalArea = calculations(data.map((item) => item.area));
  const formattedArea = formatValue(totalArea, 'mln km²', 2);

  return (
    <div className="total-area">
      <Box bg={bgColor} p={10} borderRadius={'10px'} width={300}>
        <Text fontSize="sm" fontWeight="medium" color="gray.500">
          Total Area of Europe
        </Text>
        <Text fontSize="3xl" fontWeight="bold" color={textColor}>
          {formattedArea.toLocaleString()}
        </Text>
      </Box>
    </div>
  );
};

export default AreaBanner;
