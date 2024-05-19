import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import SearchBar, { SearchBarProps } from '../../../src/components/SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  decorators: [
    (StoryFn: StoryFn<SearchBarProps>) => (
      <ChakraProvider>
        <StoryFn
          value={''}
          onChange={function (value: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      </ChakraProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  value: '',
  onChange: (value: string) => console.log(value),
  placeholder: 'Search',
};
