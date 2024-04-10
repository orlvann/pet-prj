import { Box, List, ListItem, ListIcon, Link } from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';

export const Sidebar = () => {
  return (
    <Box width='200px' position='fixed' left='0' p='5' bg='white' h='100vh'>
      <List spacing={2}>
        <ListItem>
          <Link href='/'>
            <ListIcon as={FiHome} />
            Dashboard
          </Link>
        </ListItem>
        {/* Other sidebar items are removed as per requirement */}
      </List>
    </Box>
  );
};
