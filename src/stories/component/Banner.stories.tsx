import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Banner, { BannerProps } from '../../../src/components/BannerPopulation';
import { ChakraProvider } from '@chakra-ui/react';

interface IData {
  total: number;
}

const DATA: IData[] = [
  {
    total: 746934072,
  },
];

export default {
  title: 'Components/Banner',
  component: Banner,
  decorators: [
    (StoryFn: StoryFn) => (
      <ChakraProvider>
        <StoryFn data={[]} />
      </ChakraProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<BannerProps> = (args) => <Banner {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: DATA,
};
