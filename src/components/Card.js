import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const CardElement = glamorous.li({
  listStyle: 'none',
  width: '300px',
  maxWidth: '250px',
  margin: '10px 10px 20px 10px',
  padding: '10px',
  background: 'white',
  borderLeft: '5px solid #465E69',
  transition: '0.15s ease all',
  ['&:hover']: {
    cursor: 'pointer',
    background: '#f2f2f2',
  }
});

const Title = glamorous.h2({
  margin: 0,
  fontSize: '30px',
  textTransform: 'uppercase',
  color: '#465E69',
});

const Description = glamorous.p({
  fontSize: '18px',
  letterSpacing: '1px',
  margin: 0,
  fontWeight: 100
});

const Card = (props) => {
  return (
    <CardElement>
      <Title>{props.title}</Title>
      <Description>
        {props.description.substring(0,50)+'...'}
        </Description>
    </CardElement>
  );
};


Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
export default Card;
