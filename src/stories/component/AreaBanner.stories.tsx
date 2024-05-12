import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AreaBanner, {
  AreaDisplayProps,
} from '../../../src/components/BannerArea';
import { ChakraProvider } from '@chakra-ui/react';

interface IData {
  area: number;
}

const DATA: IData[] = [
  {
    area: 10530000,
  },
];

export default {
  title: 'Components/AreaBanner',
  component: AreaBanner,
  decorators: [
    (StoryFn: StoryFn) => (
      <ChakraProvider>
        <StoryFn data={[]} />
      </ChakraProvider>
    ),
  ],
} as Meta;

const Template: StoryFn<AreaDisplayProps> = (args) => <AreaBanner {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: DATA,
};
