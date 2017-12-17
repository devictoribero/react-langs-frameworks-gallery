import React from 'react';
import PropTypes from 'prop-types';
import ListCardContainer from '../containers/ListCardContainer';


const Languages = (props) => {
  return (
    <main>
      <ListCardContainer title={props.languages.frontend.title} items={props.languages.frontend.items} />
      <ListCardContainer title={props.languages.backend.title} items={props.languages.backend.items} />
    </main>
  );
}


const {string} = PropTypes;
Languages.propTypes = {
  languages: PropTypes.shape({
    frontend: PropTypes.shape({
      title: string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: string,
          description: string,
        })
      ),
    }),
    backend: PropTypes.shape({
      title: string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: string,
          description: string,
        })
      ),
    }),
  }),
};
export default Languages;
