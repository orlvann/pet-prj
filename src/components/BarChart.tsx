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
  const textColor = colorMode === 'dark' ? '#e0e0e0' : '#000';
  const isDarkMode = colorMode === 'dark';
  const gridColor = isDarkMode ? '#e0e0e0' : '#e0e0e0';

  const fillId = isDarkMode ? 'whiteGradient' : 'colorfulGradient';

  const formatNumbers = (value: number) => {
    return `${(value / 1000000).toFixed(1)} million`;
  };

  return (
    <Box bg={bgColor} borderColor={borderColor} p={4}>
      <ResponsiveContainer width="100%" height={300}>
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
            <linearGradient id="whiteGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="white" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#A0AEC0" stopOpacity={0.8} />
            </linearGradient>
            <linearGradient id="colorfulGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4A5568" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#e0e0e0" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="name" stroke={textColor} />
          <YAxis stroke={textColor} tickFormatter={formatNumbers} />
          <Tooltip
            formatter={(value: number) =>
              `${(value / 1000000).toFixed(1)} million`
            }
            labelStyle={{ color: textColor }}
            itemStyle={{ color: textColor }}
            cursor={{ fill: 'transparent' }}
            contentStyle={{
              color: 'black',
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              borderColor: 'gray',
              borderWidth: '1px',
              padding: '10px',
              background: isDarkMode ? '#A0AEC0' : 'white',
            }}
          />
          <Bar dataKey="population" fill={`url(#${fillId})`} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CustomBarChart;
