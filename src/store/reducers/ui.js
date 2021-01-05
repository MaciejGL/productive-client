import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isDarkMode: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DARK_MODE:
      return {
        ...state,
        isDarkMode: true
      };
    case actionTypes.LIGHT_MODE:
      return {
        ...state,
        isDarkMode: false
      };
    default:
      return state;
  }
};

export default reducer;
