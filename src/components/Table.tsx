// src/components/Table.tsx
import React, { useState, useMemo } from 'react';
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  //IconButton,
} from '@chakra-ui/react';
import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons';

export interface TableColumn {
  header: string;
  accessor: string;
  render?: (dataItem: any) => React.ReactNode;
  isSortable?: boolean;
}

export interface TableProps {
  columns: TableColumn[];
  data: any[];
  onRowClick?: (dataItem: any) => void;
}

export const Table: React.FC<TableProps> = ({ columns, data, onRowClick }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'ascending' | 'descending';
  } | null>(null);

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;
    const sorted = [...data].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal < bVal) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [data, sortConfig]);

  const requestSort = (key: string) => {
    if (sortConfig && sortConfig.key === key) {
      setSortConfig({
        key,
        direction:
          sortConfig.direction === 'ascending' ? 'descending' : 'ascending',
      });
    } else {
      setSortConfig({ key, direction: 'ascending' });
    }
  };

  return (
    <ChakraTable variant='simple'>
      <Thead>
        <Tr>
          {columns.map((column) => (
            <Th
              key={column.accessor}
              onClick={() => column.isSortable && requestSort(column.accessor)}
              cursor={column.isSortable ? 'pointer' : 'auto'}
            >
              {column.header}
              {column.isSortable &&
                (sortConfig?.key === column.accessor ? (
                  sortConfig.direction === 'ascending' ? (
                    <TriangleUpIcon />
                  ) : (
                    <TriangleDownIcon />
                  )
                ) : null)}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {sortedData.map((item, index) => (
          <Tr key={index} onClick={() => onRowClick && onRowClick(item)}>
            {columns.map((column) => (
              <Td key={column.accessor}>
                {column.render ? column.render(item) : item[column.accessor]}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};
