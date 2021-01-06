import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/actions';

// components
import { Switch } from '@material-ui/core';

// Styles
import { makeStyles } from '@material-ui/core/styles';
import { SwitchContainer } from './themeModeSwitcher_style';
import { TextCentered } from '../../../../styles/styles';

const useStyles = makeStyles((theme) => ({
  switchBase: {
    color: 'darkorange',
    '&.Mui-checked': {
      color: 'orange'
    },
    '&.Mui-checked + .MuiSwitch-track': {
      backgroundColor: theme.palette.warning.dark
    }
  }
}));

const ThemeModeSwitcher = ({ isDarkMode, setDarkMode, setLightMode }) => {
  const classes = useStyles();

  const handleChange = () => {
    if (isDarkMode) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  return (
    <>
      <TextCentered>Dark Mode</TextCentered>
      <SwitchContainer>
        <button
          onClick={isDarkMode ? setLightMode : null}
          className={!isDarkMode ? 'dark_mode_off' : null}
        >
          Off
        </button>
        <Switch
          classes={{
            switchBase: classes.switchBase
          }}
          checked={isDarkMode}
          onClick={handleChange}
        />
        <button
          onClick={!isDarkMode ? setDarkMode : null}
          className={isDarkMode ? 'dark_mode_on' : null}
        >
          On
        </button>
      </SwitchContainer>
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
