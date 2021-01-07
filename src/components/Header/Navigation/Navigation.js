import React, { useState } from 'react';
// Components
import { Drawer, Divider, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Menu, Close } from '@material-ui/icons';
import Links from './Links/Links';
import ThemeModeSwitcher from '../../ThemeModeSwitcher/ThemeModeSwitcher';
// Style
import classes from './Navigation.module.scss';

const useStyles = makeStyles((theme) => ({
  DrawerRoot: {
    '&.MuiDrawer-paper': {
      width: '66%',
      maxWidth: '400px'
    },
    '&.MuiDrawer-modal': {
      zIndex: 10
    }
  }
}));

const Navigation = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const MuiClasses = useStyles();

  return (
    <div className={classes.container}>
      {matches ? (
        <>
          <Drawer
            classes={{ paper: MuiClasses.DrawerRoot }}
            open={open}
            onClose={() => setOpen(false)}
          >
            <h1 className={classes.title}>The Art of Productivity</h1>
            <Links />
            <Divider />
            <ThemeModeSwitcher />
          </Drawer>
          <div className={classes.hamburger} onClick={() => setOpen(!open)}>
            {open ? <Close /> : <Menu />}
          </div>
        </>
      ) : (
        <>
          <Links />
        </>
      )}
    </div>
  );
};

export default Navigation;
