import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Header = glamorous.header({
  margin: 0,
});


const HeaderList = (props) => {
  return <Header><h1>{props.title}</h1></Header>;
}


HeaderList.propTypes = {
  title: PropTypes.string
};
export default HeaderList;
