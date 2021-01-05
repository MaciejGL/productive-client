import { Provider } from 'react-redux';
import React from 'react';

import store from '../../store/store';

const App = ({ element }) => <Provider store={store()}>{element}</Provider>;

export default App;
