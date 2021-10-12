import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';
import { shade } from 'polished';

import { Container } from './styles';

interface HeaderProps {
  toggleTheme(): void;
  children?: React.ReactNode;
}

const Header = ({ toggleTheme }: HeaderProps) => {
  const { colors, name } = useContext(ThemeContext);

  return (
    <Container>
      {name.charAt(0).toUpperCase() + name.slice(1)} Theme
      <Switch
        onChange={toggleTheme}
        checked={name === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        width={40}
        height={10}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  );
};

export default Header;