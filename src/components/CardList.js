import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Card from './Card';

const List = glamorous.ul({
  margin: 0,
  padding: 0,
  display: 'flex',
  flexWrap: 'wrap',
});


const CardList = (props) => {
  const listItems = props.items.map((item) =>
    <Card key={item.id} title={item.title} description={item.description} />
  );

  return <List>{listItems}</List>;
}


CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  )
};
export default CardList;
