import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PopulationBarChart from '../../../components/PopulationBarChart';

export default {
  title: 'Charts/Population Bar Chart',
  component: PopulationBarChart,
  argTypes: {
    data: { control: 'object' },
  },
} as Meta;

const Template: StoryFn = (args) => <PopulationBarChart data={[]} {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { name: 'Russia', population: 144100000 },
    { name: 'Germany', population: 83000000 },
    { name: 'France', population: 67000000 },
    { name: 'United Kingdom', population: 67000000 },
    { name: 'Italy', population: 60000000 },
    { name: 'Spain', population: 47000000 },
    { name: 'Ukraine', population: 44000000 },
  ],
};
