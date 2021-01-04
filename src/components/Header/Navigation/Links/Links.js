import React from 'react';
import { Link } from 'gatsby';
// Components
import { Home, PersonAdd, VpnKey } from '@material-ui/icons';
// Styles
import { Center } from './links_style';

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
    <>
      {links.map((el) => (
        <Link to={el.path}>
          <Center>
            {el.icon}
            {el.title}
          </Center>
        </Link>
      ))}
    </>
  );
};

export default Links;
