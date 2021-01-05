import React from 'react';
import { connect } from 'react-redux';
// Components
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Paper } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Style
import { Wrapper, Content } from './layout_style';
import GlobalStyles from '../styles/styles';

const Layout = (props) => {
  console.log({ props });
  let theme = createMuiTheme({
    palette: {
      type: props.ui.isDarkMode ? 'dark' : 'light'
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

const mapStateToProps = (state) => ({
  ui: state.ui
});

export default connect(mapStateToProps)(Layout);
