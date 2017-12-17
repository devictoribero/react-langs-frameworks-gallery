import React from 'react';
import {Link} from 'react-router-dom';
import glamorous from 'glamorous';

const Container = glamorous.nav({
  margin: 0,
  display: 'flex',
  padding: '10px',
  background: '#2B3A42',
});

const ListItem = glamorous.li({
  display: 'inline-block',
  marginRight: '10px',
  color: '#ffffff',
  position: 'relative',
  paddingBottom: '0.1em',
  fontSize: '13px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  transition: 'all 250ms',
  ['&:hover']: {
    cursor: 'pointer',
    color: '#8DD6F9'
  }
});

const TopNavigator = () => {
  return(
    <Container>
      <ul>
        <ListItem selected>
          <Link to="/languages">Languages</Link>
        </ListItem>

        <ListItem>
          <Link to="/Frameworks">Frameworks</Link>
        </ListItem>
      </ul>
    </Container>
  );
}


export default TopNavigator;
