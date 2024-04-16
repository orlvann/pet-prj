//SideBar
import React from 'react';
import {
  Flex,
  List,
  ListItem,
  ListIcon,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { FiHome, FiMenu } from 'react-icons/fi';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <Flex
      as='nav'
      direction='column'
      position='fixed'
      left={isOpen ? '0' : '-250px'}
      top='0'
      p='5'
      bg='white'
      h='100vh'
      shadow='md '
      width='250px'
      overflowY='auto'
      transition='all 0.2s '
      zIndex='10'
    >
      <IconButton
        icon={<FiMenu />}
        onClick={onToggle}
        aria-label='Toggle Menu'
        mb='5'
        size='lg'
        variant='ghost'
        visibility={isOpen ? 'visible' : 'hidden'}
      />
      {isOpen && (
        <List spacing={2}>
          <ListItem>
            <Link href='/' display='flex' alignItems='center'>
              <ListIcon as={FiHome} />
              Dashboard
            </Link>
          </ListItem>
        </List>
      )}
    </Flex>
  );
};
