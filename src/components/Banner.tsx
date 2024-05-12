import { Box, Text } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

export interface BannerProps {
  data: {
    label: string;
    value: string;
  }[];
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'gray.700' : 'white';
  const textColor = colorMode === 'dark' ? '#e0e0e0' : '#000';

  return (
    <div className="banner">
      <Box bg={bgColor} p={10} borderRadius={'10px'} width={300}>
        {data.map((item, index) => (
          <div key={index}>
            <Text fontSize="sm" fontWeight="medium" color="gray.500">
              {item.label}
            </Text>
            <Text fontSize="3xl" fontWeight="bold" color={textColor}>
              {item.value}
            </Text>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default Banner;
