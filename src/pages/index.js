import * as React from 'react';
import { Link } from 'gatsby';
// Styles
import GlobalStyles from '../styles/styles';
import { ThemeProvider } from 'styled-components';
import { darkMode, lightMode } from '../styles/themeContext';
import { BoxBtn } from '../styles/home_style';
import { ParagraphSmall } from '../styles/styles';
// Components
import Layout from '../components/Layout';

// Markup
const App = () => {
  return (
    <ThemeProvider theme={darkMode}>
      <GlobalStyles />
      <Layout>
        <h1>The art of Productivity</h1>
        <BoxBtn>
          <Link to="/register">Register</Link>
          <ParagraphSmall>or</ParagraphSmall>
          <Link to="/login">Login</Link>
        </BoxBtn>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
