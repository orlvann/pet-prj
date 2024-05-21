import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorMode,
} from '@chakra-ui/react';
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
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'gray.800' : 'white';
  const borderColor = colorMode === 'dark' ? 'gray.600' : 'white';

  return (
    <ChakraTable
      variant="simple"
      bg={bgColor}
      borderColor={borderColor}
      borderRadius="10px"
    >
      <Thead>
        <Tr>
          {columns.map((column, index) => (
            <Th key={index}>{column.name}</Th>
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
