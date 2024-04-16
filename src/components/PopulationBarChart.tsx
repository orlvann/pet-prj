//PopulationBarChart
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export interface PopulationBarChartProps {
  data: { name: string; population: number }[];
}

const PopulationBarChart: React.FC<PopulationBarChartProps> = ({ data }) => {
  return (
    <div className='bar-chart'>
      <BarChart width={700} height={500} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Bar dataKey='population' fill='#8884d8' />
      </BarChart>
    </div>
  );
};

export default PopulationBarChart;
