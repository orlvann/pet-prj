import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CustomBarChart, { CustomBarChartProps } from '../../components/BarChart';
import { ChakraProvider } from '@chakra-ui/react';

interface IData {
  name: string;
  population: number;
}

const DATA: IData[] = [
  { name: 'Russia', population: 144100000 },
  { name: 'Germany', population: 83000000 },
  { name: 'France', population: 67000000 },
  { name: 'United Kingdom', population: 67000000 },
  { name: 'Italy', population: 60000000 },
  { name: 'Spain', population: 47000000 },
  { name: 'Ukraine', population: 44000000 },
];

export default {
  title: 'Components/BarChart',
  component: CustomBarChart,
  decorators: [
    (StoryFn: StoryFn<CustomBarChartProps>) => (
      <ChakraProvider>
        <StoryFn data={[]} />
      </ChakraProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<CustomBarChartProps> = (args) => (
  <CustomBarChart {...args} />
);

export const Default = Template.bind({});

Default.args = {
  data: DATA,
};
