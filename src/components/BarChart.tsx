import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useColorMode, Box } from '@chakra-ui/react';

export interface CustomBarChartProps {
  data: { name: string; population: number }[];
}

const CustomBarChart: React.FC<CustomBarChartProps> = ({ data }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'gray.800' : 'white';
  const borderColor = colorMode === 'dark' ? 'gray.700' : 'gray.200';
  const textColor = colorMode === 'dark' ? '#fff' : '#000';
  const gridColor = '#e0e0e0';

  const formatNumbers = (value: number) => {
    return `${(value / 1000000).toFixed(1)} million`;
  };

  return (
    <Box bg={bgColor} borderColor={borderColor} p={4}>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id='colorPopulation' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#4A5568' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#4A5568' stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray='3 3' stroke={gridColor} />
          <XAxis dataKey='name' stroke={textColor} />
          <YAxis stroke={textColor} tickFormatter={formatNumbers} />
          <Tooltip
            formatter={(value: number) =>
              `${(value / 1000000).toFixed(1)} million`
            }
            labelStyle={{ color: textColor }}
            itemStyle={{ color: textColor }}
            cursor={{ fill: 'transparent' }}
            contentStyle={{
              color: textColor,
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              borderColor: 'gray',
              borderWidth: '1px',
              padding: '10px',
            }}
          />
          <Bar dataKey='population' fill='url(#colorPopulation)' />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CustomBarChart;
