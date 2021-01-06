import React from 'react';

import ThemeModeSwitcher from '../Header/Navigation/ThemeModeSwitcher/ThemeModeSwitcher';
import { FooterContainer } from './footer_style';

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <ThemeModeSwitcher />
      </div>
    </FooterContainer>
  );
};

export default Footer;
