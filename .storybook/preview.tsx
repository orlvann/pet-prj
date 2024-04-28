// .storybook/preview.tsx

import React from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './queryClient';
import { Decorator } from '@storybook/react';

export const decorators: Decorator[] = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  ),
];
