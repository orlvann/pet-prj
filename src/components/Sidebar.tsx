import React from 'react';
import { Flex, List, ListItem, ListIcon, Link, Box } from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';
import { useColorMode } from '@chakra-ui/react';
interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'gray.700' : 'white';
  const borderColor = colorMode === 'dark' ? 'gray.600' : 'gray.200';

  return (
    <Flex
      bg={bgColor}
      borderColor={borderColor}
      direction="column"
      position="fixed"
      left={isOpen ? '0' : '-250px'}
      top="0"
      p="5"
      h="100vh"
      shadow="md "
      width="250px"
      overflowY="auto"
      transition="all 0.2s "
      zIndex="10"
    >
      <Box mb="55" />
      {isOpen && (
        <List spacing={2}>
          <ListItem>
            <Link href="/" display="flex" alignItems="center">
              <ListIcon as={FiHome} />
              Dashboard
            </Link>
          </ListItem>
        </List>
      )}
    </Flex>
  );
};
