import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

// components
import { Switch } from '@material-ui/core';

// Styles
import { makeStyles } from '@material-ui/core/styles';
import classes from './ThemeModeSwitcher.module.scss';

const useStyles = makeStyles((theme) => ({
  switchBase: {
    color: theme.palette.focus.dense,
    '&.Mui-checked': {
      color: theme.palette.focus.main
    },
    '&.Mui-checked + .MuiSwitch-track': {
      backgroundColor: theme.palette.warning.dark
    }
  }
}));

const ThemeModeSwitcher = ({ isDarkMode, setDarkMode, setLightMode }) => {
  const MuiClasses = useStyles();

  const handleChange = () => {
    if (isDarkMode) {
      window.localStorage.setItem('darkMode', false);
      setLightMode();
    } else {
      window.localStorage.setItem('darkMode', true);
      setDarkMode();
    }
  };
  return (
    <>
      <p className="centered">Dark Mode</p>
      <div className={classes.container}>
        <button
          onClick={isDarkMode ? setLightMode : null}
          className={!isDarkMode ? classes['dark_mode_off'] : null}
        >
          Off
        </button>
        <Switch
          classes={{
            switchBase: MuiClasses.switchBase
          }}
          checked={isDarkMode}
          onClick={handleChange}
        />
        <button
          onClick={!isDarkMode ? setDarkMode : null}
          className={isDarkMode ? classes['dark_mode_on'] : null}
        >
          On
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isDarkMode: state.ui.isDarkMode
});

const mapDispatchToProps = (dispatch) => ({
  setDarkMode: () => dispatch(actions.dark_mode()),
  setLightMode: () => dispatch(actions.light_mode())
});
export default connect(mapStateToProps, mapDispatchToProps)(ThemeModeSwitcher);
