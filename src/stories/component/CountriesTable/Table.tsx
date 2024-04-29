import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  CountriesTable,
  CountriesTableProps,
} from '../../../components/CountriesTable';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../../../.storybook/queryClient';
import { useFetchEUCountries } from '../../../api/countries';
import { action } from '@storybook/addon-actions';

interface CountriesTableWithQueryProps {
  onRowClick: CountriesTableProps['onRowClick'];
}

const CountriesTableWithQuery: React.FC<CountriesTableWithQueryProps> = ({
  onRowClick,
}) => {
  const { data: countries, isLoading, isError } = useFetchEUCountries();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !countries) return <div>Error fetching data</div>;

  return <CountriesTable countries={countries} onRowClick={onRowClick} />;
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
} as Meta;

const Template: StoryFn = (args) => (
  <CountriesTableWithQuery
    onRowClick={function (cca3: string): void {
      throw new Error('Function not implemented.');
    }}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  onRowClick: action('row clicked'),
};
