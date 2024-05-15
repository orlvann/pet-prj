import React from 'react';
import Banner from '../components/Banner';
import { formatNumbers } from '../utils/formatNumbers';
import { calculations } from '../utils/calculations';

export interface AreaDisplayProps {
  data: { area: number }[];
}

const AreaDisplay: React.FC<AreaDisplayProps> = ({ data }) => {
  const totalArea = calculations(data.map((item) => item.area));
  const formattedArea = formatNumbers(totalArea, 'mln km²');

  return (
    <Banner
      label={'Total Area of Europe'}
      value={formattedArea.toLocaleString()}
    />
  );
};

export default AreaDisplay;
