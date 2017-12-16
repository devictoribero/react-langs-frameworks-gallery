import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Header = glamorous.header({
  margin: '10px 0',
  padding: '10px 0',
});

const Title = glamorous.h1({
  margin: 0,
  padding: 0,
  color: '#465E69',
  fontSize: '45px'
});


const HeaderList = (props) => {
  return <Header><Title>{props.title}</Title></Header>;
}


HeaderList.propTypes = {
  title: PropTypes.string
};
export default HeaderList;
