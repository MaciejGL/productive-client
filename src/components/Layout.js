import React from 'react';
// Components
import Header from './Header/Header';
import Footer from './Footer/Footer';
// Style
import { Wrapper, Content } from './layout_style';
import GlobalStyles from '../styles/styles';
import { ThemeProvider } from 'styled-components';
import { darkMode, lightMode } from '../styles/themeContext';

const Layout = (props) => {
  return (
    <ThemeProvider theme={darkMode}>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Content>{props.children}</Content>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
