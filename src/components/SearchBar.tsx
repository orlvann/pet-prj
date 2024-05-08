import React from 'react';
import { Input, InputGroup, InputLeftElement, Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
export interface SearchBarProps {
  data: { value: string; onChange: (value: string) => void }[];
}

const SearchBar: React.FC<SearchBarProps> = ({ data }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'gray.700' : 'white';
  const borderColor = colorMode === 'dark' ? 'gray.600' : 'gray.200';

  return (
    <Box bg={bgColor} borderColor={borderColor} className='search'>
      {data.map((input, index) => (
        <InputGroup key={index}>
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon color='gray.400' />}
          />
          <Input
            type='text'
            placeholder='Search'
            value={input.value}
            onChange={(e) => input.onChange(e.target.value)}
          />
        </InputGroup>
      ))}
    </Box>
  );
};

export default SearchBar;
