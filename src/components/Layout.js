import React from 'react';
import { connect } from 'react-redux';
// Components
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
// Style
import { Wrapper, Content } from './layout_style';
import GlobalStyles from '../styles/styles';
import { theme } from '../styles/custom_theme';

const Layout = (props) => {
  const customTheme = theme(props.ui.isDarkMode);
  return (
    <ThemeProvider theme={customTheme}>
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
