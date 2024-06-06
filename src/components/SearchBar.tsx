import React from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('#000', '#e0e0e0');

  return (
    <InputGroup
      bg={bgColor}
      borderColor={borderColor}
      className="search-bar"
      borderRadius="10px"
    >
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        type="text"
        placeholder="Search"
        stroke={textColor}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchBar;
