import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useColorMode, Box } from '@chakra-ui/react';

export interface PopulationBarChartProps {
  data: { name: string; population: number }[];
}

const PopulationBarChart: React.FC<PopulationBarChartProps> = ({ data }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'gray.800' : 'white';
  const borderColor = colorMode === 'dark' ? 'gray.700' : 'gray.200';

  // This function will format your tick to show in millions
  const formatYAxisTick = (tickItem: number) => {
    return `${(tickItem / 1e6).toFixed(1)}M`;
  };

  return (
    <Box
      className='bar-chart'
      bg={bgColor}
      borderColor={borderColor}
      borderWidth={1}
      p={4}
    >
      <BarChart width={700} height={500} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis tickFormatter={formatYAxisTick} />
        <Tooltip
          formatter={(value: number) => [
            `${(value / 1e6).toFixed(2)}M`,
            'Population',
          ]}
        />
        <Bar dataKey='population' fill='#8884d8' />
      </BarChart>
    </Box>
  );
};

export default PopulationBarChart;
