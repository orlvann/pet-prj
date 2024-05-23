import React from 'react';
import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';
import Logo from './Logo';

interface HeaderProps {
  toggleSidebar: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
const Header: React.FC<HeaderProps> = ({
  toggleSidebar,
  isDarkMode,
  toggleDarkMode,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justify="space-between" w="100%">
      <Flex align="center">
        <IconButton
          icon={<FaBars />}
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
          mr={4}
        />
        <Logo />
      </Flex>

      <IconButton
        icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
        aria-label="Toggle Dark Mode"
      />
    </Flex>
  );
};
export default Header;
