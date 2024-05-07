import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Table } from '../../../components/Table';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../../../.storybook/queryClient';
import { useFetchEUCountries } from '../../../api/countries';
import { action } from '@storybook/addon-actions';
import { Country } from '../../../api/countries';

interface CountriesTableWithQueryProps {
  onRowClick: (item: Country) => void;
}

const CountriesTableWithQuery: React.FC<CountriesTableWithQueryProps> = ({
  onRowClick,
}) => {
  const { data: countries, isLoading, isError } = useFetchEUCountries();

  if (isLoading) return <div>Loading...</div>;
  if (isError || !countries) return <div>Error fetching data</div>;

  return (
    <Table<Country> data={countries} onRowClick={onRowClick} columns={[]} />
  );
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

const Template: StoryFn<CountriesTableWithQueryProps> = (args) => (
  <CountriesTableWithQuery {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onRowClick: action('row clicked'), // Correctly define actions
};
