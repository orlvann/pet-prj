// src/components/PopulationBarChart.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface PopulationBarChartProps {
  data: { name: string; population: number }[];
}

const PopulationBarChart: React.FC<PopulationBarChartProps> = ({ data }) => {
  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Bar dataKey='population' fill='#8884d8' />
    </BarChart>
  );
};

export default PopulationBarChart;
