import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Sidebar, SidebarProps } from '../../../src/components/Sidebar';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  decorators: [(StoryFn) => <ChakraProvider>{StoryFn()}</ChakraProvider>],
} as Meta<SidebarProps>;

const Template: StoryFn<SidebarProps> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onToggle: () => console.log('Toggle sidebar'), // Replace with actual toggle functionality if needed
};
