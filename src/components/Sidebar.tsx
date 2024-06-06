import React, { useState } from 'react';
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
  useColorModeValue,
} from '@chakra-ui/react';
import { FiHome, FiChevronDown, FiChevronUp, FiMenu } from 'react-icons/fi';
import { IoFolderOpenOutline } from 'react-icons/io5';

import { useFetchCountriesByRegion } from '../api/countries';
import { Outlet } from 'react-router-dom';

export interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const bgColor = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'gray.50');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const [expandedContinent, setExpandedContinent] = useState<string | null>(
    null
  );

  const handleToggle = (continent: string) => {
    setExpandedContinent(expandedContinent === continent ? null : continent);
  };

  const continents = ['Europe', 'Africa', 'Americas', 'Oceania', 'Asia'];

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
      className="sidebar"
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
          {continents.map((continent) => {
            const {
              data: countriesData,
              isLoading,
              isError,
              // eslint-disable-next-line react-hooks/rules-of-hooks
            } = useFetchCountriesByRegion(continent);

            if (isLoading) return <Spinner key={continent} />;
            if (isError)
              return (
                <Box key={continent}>Error loading {continent} countries</Box>
              );

            return (
              <ListItem key={continent}>
                <Button
                  onClick={() => handleToggle(continent)}
                  display="flex"
                  alignItems="center"
                  variant="link"
                  color={textColor}
                >
                  <ListIcon as={IoFolderOpenOutline} />
                  {continent}
                  <ListIcon
                    as={
                      expandedContinent === continent
                        ? FiChevronUp
                        : FiChevronDown
                    }
                    marginLeft="auto"
                  />
                </Button>
                <Collapse in={expandedContinent === continent} animateOpacity>
                  <List pl={4} mt={2} spacing={1}>
                    {countriesData?.map((country) => (
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
            );
          })}
        </List>
      </Box>
      <Box mt="auto">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Sidebar;
