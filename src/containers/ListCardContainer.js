import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import CardList from '../components/CardList';
import HeaderList from '../components/HeaderList';

const Container = glamorous.section({
  margin: 0,
  marginBottom: '20px',
  padding: 0,
});


const ListCardContainer = (props) => {
  return(
    <Container>
      <HeaderList title={props.title} />
      <CardList items={props.items} />
    </Container>
  );
}


ListCardContainer.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}
export default ListCardContainer;
