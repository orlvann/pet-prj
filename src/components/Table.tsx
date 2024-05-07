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
  accessor: (item: T, index?: number) => React.ReactNode;
  render?: (value: React.ReactNode, item: T, index?: number) => JSX.Element;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
}

export const Table = <T extends {}>({
  columns,
  data,
  onRowClick,
}: TableProps<T>): JSX.Element => {
  return (
    <ChakraTable variant='simple'>
      <Thead>
        <Tr>
          <Th>#</Th> {/* Header for the row number */}
          {columns.map((column, index) => (
            <Th key={index}>{column.header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, idx) => (
          <Tr key={idx} onClick={() => onRowClick && onRowClick(item)}>
            <Td>{idx + 1}</Td> {/* Display row number, starting from 1 */}
            {columns.map((column) => (
              <Td key={column.header}>
                {column.render
                  ? column.render(column.accessor(item, idx), item, idx)
                  : column.accessor(item, idx)}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};
