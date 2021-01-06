import React, { useState } from 'react';
// Components
import { Drawer, Divider, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Menu, Close } from '@material-ui/icons';
import Links from './Links/Links';
import ThemeModeSwitcher from './ThemeModeSwitcher/ThemeModeSwitcher';
// Style
import { Nav, H2, Hamburger } from './navigation_style';

const useStyles = makeStyles((theme) => ({
  DrawerRoot: {
    '&.MuiDrawer-paper': {
      width: '75%',
      maxWidth: '400px'
    }
  }
}));

const Navigation = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <Nav>
      {matches ? (
        <>
          <Drawer
            classes={{ paper: classes.DrawerRoot }}
            open={open}
            onClose={() => setOpen(false)}
          >
            <H2>The Art of Productivity</H2>
            <Links />
            <Divider />
            <ThemeModeSwitcher />
          </Drawer>
          <Hamburger onClick={() => setOpen(!open)}>
            {open ? <Close /> : <Menu />}
          </Hamburger>
        </>
      ) : (
        <>
          <Links />
        </>
      )}
    </Nav>
  );
};

export default Navigation;
