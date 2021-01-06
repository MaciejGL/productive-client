import React from 'react';
import { Link } from 'gatsby';
// Components
import { Home, PersonAdd, VpnKey } from '@material-ui/icons';
// Styles
import { Div, LinksContainer } from './links_style';

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
    <LinksContainer>
      {links.map((el) => (
        <Link key={el.title} to={el.path} activeClassName={'activeLink'}>
          <Div>
            {el.icon}
            <p>{el.title}</p>
          </Div>
        </Link>
      ))}
    </LinksContainer>
  );
};

export default Links;
