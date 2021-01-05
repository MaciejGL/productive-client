import React from 'react';
// Components
import Navigation from './Navigation/Navigation';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <Navigation />
      <button
        onClick={() => {
          props.lightMode();
        }}
      >
        Light Mode
      </button>
      <br />
      <button
        onClick={() => {
          props.darkMode();
        }}
      >
        Dark Mode
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  darkMode: () => dispatch(actions.dark_mode()),
  lightMode: () => dispatch(actions.light_mode())
});
export default connect(null, mapDispatchToProps)(Header);
