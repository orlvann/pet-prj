import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PopulationBanner, {
  PopulationDisplayProps,
} from '../../components/BannerPopulation';
import { ChakraProvider } from '@chakra-ui/react';

interface IData {
  population: number;
}

const DATA: IData[] = [
  {
    population: 746934072,
  },
];

export default {
  title: 'Components/PopulationBanner',
  component: PopulationBanner,
  decorators: [
    (StoryFn: StoryFn) => (
      <ChakraProvider>
        <StoryFn data={[]} />
      </ChakraProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<PopulationDisplayProps> = (args) => (
  <PopulationBanner {...args} />
);

export const Default = Template.bind({});

Default.args = {
  data: DATA,
};
