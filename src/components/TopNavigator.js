import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Container = glamorous.nav({
  margin: 0,
  display: 'flex',
  padding: '10px',
  background: '#2B3A42',
});

const Link = glamorous.a({
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
      <Link selected>Languages</Link>
      <Link>Frameworks</Link>
    </Container>
  );
}


export default TopNavigator;
