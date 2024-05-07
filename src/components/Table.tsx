// src/components/Table.tsx
import React from 'react';
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

export interface TableColumn<T> {
  header: string;
  accessor: (item: T) => React.ReactNode; // Ensures data is fetched from item
  render?: (value: React.ReactNode) => JSX.Element; // Optionally formats the fetched data
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  onRowClick?: (item: T) => void; // Triggered on row click, receives row data
}

export const Table = <T,>({
  columns,
  data,
  onRowClick,
}: TableProps<T>): JSX.Element => {
  return (
    <ChakraTable variant='simple'>
      <Thead>
        <Tr>
          {columns.map((column, index) => (
            <Th key={index}>{column.header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, idx) => (
          <Tr key={idx} onClick={() => (onRowClick ? onRowClick(item) : null)}>
            {columns.map((column) => (
              <Td key={column.header}>
                {column.render
                  ? column.render(column.accessor(item))
                  : column.accessor(item)}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};
