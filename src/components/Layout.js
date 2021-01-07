import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
// Components
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Paper } from '@material-ui/core';
// Style
import { ThemeProvider } from '@material-ui/core/styles';
import classes from './Layout.module.scss';
import { theme } from '../styles/mui_custom_theme';

import * as actions from '../store/actions';

const Layout = (props) => {
  useLayoutEffect(() => {
    if (JSON.parse(localStorage.getItem('darkMode'))) {
      props.setDarkMode();
    } else {
      props.setLightMode();
    }
  }, []);

  const customTheme = theme(props.ui.isDarkMode);

  return (
    <ThemeProvider theme={customTheme}>
      <Paper square>
        <div className={classes.wrapper}>
          <Header />
          <main className={classes.content}>{props.children}</main>
          <Footer />
        </div>
      </Paper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui
});
const mapDispatchToProps = (dispatch) => ({
  setDarkMode: () => dispatch(actions.dark_mode()),
  setLightMode: () => dispatch(actions.light_mode())
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
