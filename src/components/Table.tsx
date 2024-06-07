import React from 'react';
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Box,
  Icon,
} from '@chakra-ui/react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import { numberWithCommas } from '../utils/numberWithComma';

export interface TableColumn {
  key: string;
  fieldName: string;
  name: string;
  onRender?: (item: any, index?: number) => JSX.Element;
  onColumnClick?: (
    ev: React.MouseEvent<HTMLElement>,
    column: TableColumn
  ) => void;
  isSorted?: boolean;
  isSortedDescending?: boolean;
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
  const getSortIcon = (
    isSorted: boolean = false,
    isSortedDescending: boolean = false
  ) => {
    if (isSorted) {
      return isSortedDescending ? <FaSortDown /> : <FaSortUp />;
    }
    return null; // Only show the sort icon if the column is sorted
  };

  return (
    <ChakraTable variant="simple">
      <Thead>
        <Tr>
          {columns.map((column, index) => (
            <Th
              key={index}
              onClick={(ev) =>
                column.onColumnClick && column.onColumnClick(ev, column)
              }
              cursor="pointer"
              textAlign="center"
            >
              <Flex justify="center" align="center">
                <Box mr="2">{column.name}</Box>
                {getSortIcon(column.isSorted, column.isSortedDescending) && (
                  <Icon
                    as={() =>
                      getSortIcon(column.isSorted, column.isSortedDescending)
                    }
                  />
                )}
              </Flex>
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, idx) => (
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
