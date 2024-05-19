import React, { useState } from 'react';
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Box,
} from '@chakra-ui/react';
import { FaSortUp, FaSortDown, FaSort } from 'react-icons/fa';
import { numberWithCommas } from '../utils/numberWithComma';

export interface TableColumn {
  key: string;
  fieldName: string;
  name: string;
  onRender?: (item: any, index?: number) => JSX.Element;
}

export interface TableProps {
  columns: TableColumn[];
  data: any[];
  onRowClick?: (item: any, index: number) => void;
}

export const Table = ({
  columns,
  data,
  onRowClick,
}: TableProps): JSX.Element => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc' | null;
  }>({
    key: '',
    direction: null,
  });

  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return data;
    const sorted = [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [data, sortConfig]);

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' | null = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <ChakraTable variant="simple">
      <Thead>
        <Tr>
          {columns.map((column, index) => (
            <Th
              key={index}
              onClick={() => requestSort(column.fieldName)}
              cursor="pointer"
              textAlign="center"
            >
              <Flex justify="center" align="center">
                <Box mr="2">{column.name}</Box>
                <Box>
                  {sortConfig.key === column.fieldName ? (
                    sortConfig.direction === 'asc' ? (
                      <FaSortUp />
                    ) : (
                      <FaSortDown />
                    )
                  ) : (
                    <FaSort />
                  )}
                </Box>
              </Flex>
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {sortedData.map((item, idx) => (
          <Tr key={idx} onClick={() => onRowClick && onRowClick(item, idx)}>
            {columns.map((column) => (
              <Td key={column.key} textAlign="center">
                {column.onRender
                  ? column.onRender(item, idx)
                  : column.fieldName === 'population'
                    ? numberWithCommas(item[column.fieldName])
                    : item[column.fieldName]}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};
