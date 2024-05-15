import { Box, Text } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

export interface BannerProps {
  label: string;
  value: string;
}

const Banner: React.FC<BannerProps> = ({ label, value }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'gray.700' : 'white';
  const textColor = colorMode === 'dark' ? '#e0e0e0' : '#000';

  return (
    <div className="banner">
      <Box bg={bgColor} p={10} borderRadius="10px" width="300px">
        <Text fontSize="sm" fontWeight="medium" color="gray.500">
          {label}
        </Text>
        <Text fontSize="3xl" fontWeight="bold" color={textColor}>
          {value}
        </Text>
      </Box>
    </div>
  );
};

export default Banner;
