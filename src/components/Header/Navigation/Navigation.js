import React, { useState } from 'react';
// Components
import { Drawer, Button, Divider } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Links from './Links/Links';
import ThemeModeSwitcher from './ThemeModeSwitcher/ThemeModeSwitcher';
// Style
import { NavRight } from './navigation_style';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavRight>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Links />
        <Divider />
        <ThemeModeSwitcher />
      </Drawer>
      <Button onClick={() => setOpen(!open)}>
        <Menu fontSize={'large'} />
      </Button>
    </NavRight>
  );
};

export default Navigation;
