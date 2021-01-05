import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/actions/index';

// components
import { Switch } from '@material-ui/core';

const ThemeModeSwitcher = ({ isDarkMode, setDarkMode, setLightMode }) => {
  const handleChange = () => {
    console.log('change');
    if (isDarkMode) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };
  return <Switch checked={isDarkMode} onClick={handleChange} />;
};

const mapStateToProps = (state) => ({
  isDarkMode: state.ui.isDarkMode
});

const mapDispatchToProps = (dispatch) => ({
  setDarkMode: () => dispatch(actions.dark_mode()),
  setLightMode: () => dispatch(actions.light_mode())
});
export default connect(mapStateToProps, mapDispatchToProps)(ThemeModeSwitcher);
