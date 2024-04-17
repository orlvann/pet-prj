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

  return (
    <div className='bar-chart'>
      <Box bg={bgColor} borderColor={borderColor}>
        <BarChart width={700} height={500} data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Bar dataKey='population' fill='#8884d8' />
        </BarChart>
      </Box>
    </div>
  );
};

export default PopulationBarChart;
