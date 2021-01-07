import React from 'react';
import { Link } from 'gatsby';
// Components
import { Home, PersonAdd, VpnKey } from '@material-ui/icons';
// Styles
import classes from './Links.module.scss';

const Links = () => {
  const links = [
    {
      title: 'Home',
      icon: <Home />,
      path: '/'
    },
    {
      title: 'Register',
      icon: <PersonAdd />,
      path: '/register'
    },
    {
      title: 'Login',
      icon: <VpnKey />,
      path: '/login'
    }
  ];
  return (
    <div className={classes.container}>
      {links.map((el) => (
        <Link key={el.title} to={el.path} activeClassName={classes.activeLink}>
          <div className={classes['inner_text']}>
            {el.icon}
            <p>{el.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Links;
