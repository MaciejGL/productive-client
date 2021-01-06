import * as React from 'react';
import { Link } from 'gatsby';
// Styles
import { BoxBtn, HeadingCentered } from '../styles/homepage_style';
import { ParagraphSmall } from '../styles/styles';
// Components
import Layout from '../components/Layout';

// Markup
const Homepage = (props) => {
  return (
    <Layout>
      <HeadingCentered>The art of Productivity</HeadingCentered>
      <BoxBtn>
        <Link to="/register">Register</Link>
        <ParagraphSmall>or</ParagraphSmall>
        <Link to="/login">Login</Link>
      </BoxBtn>
    </Layout>
  );
};

export default Homepage;
