import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';

import { Sidebar, SidebarProps } from '../../../src/components/Sidebar';

interface IData {
  isOpen: boolean;
  onToggle: () => void;
}

const DATA: IData[] = [
  {
    isOpen: true,
    onToggle: () => {},
  },
];

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  decorators: [
    (StoryFn) => (
      <ChakraProvider>
        <StoryFn data={[]} />
      </ChakraProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<SidebarProps> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: DATA,
};
