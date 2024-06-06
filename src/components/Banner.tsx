import { Box, Text, useColorModeValue } from '@chakra-ui/react';

export interface BannerProps {
  label: string;
  value: string;
}

const Banner: React.FC<BannerProps> = ({ label, value }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('#000', '#e0e0e0');

  return (
    <Box
      bg={bgColor}
      p={10}
      borderRadius="10px"
      width="300px"
      className="banner"
    >
      <Text fontSize="sm" fontWeight="medium" color="gray.500">
        {label}
      </Text>
      <Text fontSize="3xl" fontWeight="bold" color={textColor}>
        {value}
      </Text>
    </Box>
  );
};

export default Banner;
