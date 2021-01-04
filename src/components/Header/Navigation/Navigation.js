import React, { useState } from 'react';
// Components
import { Drawer, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Links from './Links/Links';
// Style
import { NavRight } from './navigation_style';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavRight>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Links />
      </Drawer>
      <Button onClick={() => setOpen(!open)}>
        <Menu fontSize={'large'} />
      </Button>
    </NavRight>
  );
};

export default Navigation;
