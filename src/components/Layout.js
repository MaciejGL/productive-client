import React from 'react';
// Components
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
// Style
import { Wrapper, Content } from './layout_style';
import GlobalStyles from '../styles/styles';

const Layout = (props) => {
  let theme = createMuiTheme({
    palette: {
      type: 'dark'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Paper>
        <Wrapper>
          <Header />
          <Content>{props.children}</Content>
          <Footer />
        </Wrapper>
      </Paper>
    </ThemeProvider>
  );
};

export default Layout;
