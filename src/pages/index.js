import * as React from 'react';
import { Link } from 'gatsby';
// Styles
import classes from '../styles/Homepage.module.scss';
// Components
import Layout from '../components/Layout';

// Markup
const Homepage = () => (
  <Layout>
    <h1 className={classes.title}>The art of Productivity</h1>
    <div className={classes['btns_container']}>
      <Link to="/register">Register</Link>
      <p className="paragraphSmall">or</p>
      <Link to="/login">Login</Link>
    </div>
  </Layout>
);

export default Homepage;
