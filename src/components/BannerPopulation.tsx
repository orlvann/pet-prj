import React from 'react';
import Banner from '../components/Banner';
import { calculations } from '../utils/calculations';

export interface PopulationDisplayProps {
  data: { population: number }[];
}

const PopulationDisplay: React.FC<PopulationDisplayProps> = ({ data }) => {
  const totalPopulation = calculations(data.map((item) => item.population));
  const formattedPopulation = totalPopulation.toLocaleString('en-US');

  return (
    <Banner
      label={'Total Population in Europe'}
      value={formattedPopulation.toLocaleString()}
    />
  );
};

export default PopulationDisplay;
