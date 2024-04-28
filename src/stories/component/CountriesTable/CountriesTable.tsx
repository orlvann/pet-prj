// src/stories/CountriesTable.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CountriesTable } from '../../../components/CountriesTable';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../../../.storybook/queryClient';
import { useFetchEUCountries } from '../../../api/countries';

const CountriesTableWithQuery: React.FC = () => {
  const { data: countries, isLoading, isError } = useFetchEUCountries();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !countries) return <div>Error fetching data</div>;

  return <CountriesTable countries={countries} />;
};

export default {
  title: 'Components/CountriesTable',
  component: CountriesTableWithQuery,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} as Meta<typeof CountriesTableWithQuery>;

export const Default: StoryFn = () => <CountriesTableWithQuery />;
