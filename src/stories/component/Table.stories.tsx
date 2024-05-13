import { Image } from '@chakra-ui/react';
import { Meta, StoryFn } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Table, TableColumn, TableProps } from '../../components/Table';
import { fn } from '@storybook/test';

interface IData {
  code: string;
  name: string;
  flag: string;
  capital: string;
  population: number;
  independent: boolean;
}

const DATA: IData[] = [
  {
    code: 'MD',
    name: 'Moldova',
    flag: 'https://flagcdn.com/w320/md.png',
    capital: 'Chișinău',
    population: 27657145,
    independent: true,
  },
  {
    code: 'MD',
    name: 'Moldova',
    flag: 'https://flagcdn.com/w320/md.png',
    capital: 'Chișinău',
    population: 27657145,
    independent: true,
  },
];

const COLUMNS: TableColumn[] = [
  {
    key: 'code',
    fieldName: 'code',
    name: 'Country Code',
  },
  {
    key: 'name',
    fieldName: 'name',
    name: 'Name',
  },
  {
    key: 'flag',
    fieldName: 'flag',
    name: 'Flag',
    onRender(item: IData) {
      return <Image src={item.flag} alt="Flag" height="20px" />;
    },
  },
  {
    key: 'capital',
    fieldName: 'capital',
    name: 'Capital',
  },
  {
    key: 'population',
    fieldName: 'population',
    name: 'Population',
  },

  {
    key: 'independent',
    fieldName: 'independent',
    name: 'Independent',
    onRender(item: IData) {
      return <span>{item.independent ? 'Yes' : 'No'}</span>;
    },
  },
];

export default {
  title: 'Components/Table',
  component: Table,
  decorators: [
    (StoryFn: StoryFn<TableProps>) => (
      <ChakraProvider>
        <StoryFn columns={[]} data={[]} />
      </ChakraProvider>
    ),
  ],
  args: {
    onRowClick: fn(),
  },
  argTypes: {
    onRowClick: { action: 'onRowClick' },
    data: { control: { type: 'object' } },
    columns: { control: { type: 'object' } },
  },
} as Meta<TableProps>;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: DATA,
  columns: COLUMNS,
};
