import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SearchBar, { SearchBarProps } from '../../../src/components/SearchBar';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

interface IData {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const DATA: IData[] = [
  {
    placeholder: 'Search',
    value: '',
    onChange: function (value: string): void {
      throw new Error('Function not implemented.');
    },
  },
];

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  decorators: [
    (StoryFn: StoryFn<SearchBarProps>) => (
      <Router>
        <ChakraProvider>
          <StoryFn data={[]} />
        </ChakraProvider>
      </Router>
    ),
  ],
} as Meta;

const Template: StoryFn<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: DATA,
};
