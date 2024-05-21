import React from 'react';
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import { numberWithCommas } from '../utils/numberWithComma';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

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
            >
              {column.name}
              {column.isSorted ? (
                column.isSortedDescending ? (
                  <FaSortDown />
                ) : (
                  <FaSortUp />
                )
              ) : (
                <FaSort />
              )}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, idx) => (
          <Tr key={idx} onClick={() => onRowClick && onRowClick(item, idx)}>
            {columns.map((column) => (
              <Td key={column.key}>
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
