import React, { useEffect, useState } from 'react';
import {
  Flex,
  List,
  ListItem,
  ListIcon,
  Link,
  Box,
  Spinner,
  Collapse,
  Button,
  IconButton,
} from '@chakra-ui/react';
import {
  FiHome,
  FiGlobe,
  FiChevronDown,
  FiChevronUp,
  FiMenu,
} from 'react-icons/fi';
import { useColorMode } from '@chakra-ui/react';
import { useFetchEUCountries } from '../api/countries';
import { Outlet } from 'react-router-dom';

export interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'gray.800' : 'white';
  const textColor = colorMode === 'dark' ? 'gray.50' : 'gray.800';
  const borderColor = colorMode === 'dark' ? 'gray.600' : 'gray.200';

  const {
    data: countriesData,
    isLoading: isLoadingCountries,
    isError,
  } = useFetchEUCountries();
  const [countries, setCountries] = useState<any[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (countriesData) {
      setCountries(countriesData);
    }
  }, [countriesData]);

  if (isLoadingCountries) return <Spinner />;
  if (isError) return <Box>Error loading countries</Box>;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

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
      shadow="md"
      width="250px"
      overflowY="auto"
      transition="all 0.2s"
      zIndex="20"
      borderRadius="10px"
    >
      <Box>
        <IconButton
          icon={<FiMenu />}
          onClick={onToggle}
          aria-label="Close Menu"
          mb="5"
          position="absolute"
          top="1rem"
          left="1rem"
        />
      </Box>
      <Box mt="3rem">
        <List spacing={2} color={textColor}>
          <ListItem>
            <Link href="/" display="flex" alignItems="center">
              <ListIcon as={FiHome} />
              Dashboard
            </Link>
          </ListItem>
          <ListItem>
            <Button
              onClick={handleToggle}
              display="flex"
              alignItems="center"
              variant="link"
              color={textColor}
            >
              <ListIcon as={FiGlobe} />
              Detailed Country Info
              <ListIcon
                as={isExpanded ? FiChevronUp : FiChevronDown}
                marginLeft="auto"
              />
            </Button>
            <Collapse in={isExpanded} animateOpacity>
              <List pl={4} mt={2} spacing={1}>
                {countries.map((country) => (
                  <ListItem key={country.cca3}>
                    <Link
                      href={`/country/${country.cca3}`}
                      display="flex"
                      alignItems="center"
                      color={textColor}
                    >
                      {country.name.common}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </ListItem>
        </List>
      </Box>
      <Box mt="auto">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Sidebar;
