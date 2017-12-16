import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Header = glamorous.header({
  margin: '10px 0',
  padding: '10px 0',
  borderBottom: '1px solid black',
});

const Title = glamorous.h1({
  margin: 0,
  padding: 0
});


const HeaderList = (props) => {
  return <Header><Title>{props.title}</Title></Header>;
}


HeaderList.propTypes = {
  title: PropTypes.string
};
export default HeaderList;
