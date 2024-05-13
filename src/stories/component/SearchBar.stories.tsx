import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchBar, { SearchBarProps } from '../../../src/components/SearchBar';
import { ChakraProvider } from '@chakra-ui/react';

interface IData {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const DATA: IData[] = [
  {
    placeholder: 'Search',
    value: '',
    onChange: function (value: string): void {
      console.log(value);
    },
  },
];

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  decorators: [
    (StoryFn: StoryFn<SearchBarProps>) => (
      <ChakraProvider>
        <StoryFn data={[]} />
      </ChakraProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: DATA,
};
