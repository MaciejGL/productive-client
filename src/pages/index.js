import * as React from 'react';
import { Link } from 'gatsby';
// Styles
import { BoxBtn } from '../styles/home_style';
import { ParagraphSmall } from '../styles/styles';
// Components
import Layout from '../components/Layout';

// Markup
const Homepage = (props) => {
  return (
    <Layout>
      <h1>The art of Productivity</h1>
      <BoxBtn>
        <Link to="/register">Register</Link>
        <ParagraphSmall>or</ParagraphSmall>
        <Link to="/login">Login</Link>
      </BoxBtn>
    </Layout>
  );
};

export default Homepage;
