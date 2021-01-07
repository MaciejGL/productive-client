import React from 'react';

import ThemeModeSwitcher from '../ThemeModeSwitcher/ThemeModeSwitcher';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.container}>
      <div>
        <ThemeModeSwitcher />
      </div>
    </div>
  );
};

export default Footer;
