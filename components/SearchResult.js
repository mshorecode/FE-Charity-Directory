import React from 'react';
import PropTypes from 'prop-types';

export default function SearchResult({ result }) {
  return (
    <div
      className="search-result"
    >
      {result.name}
    </div>
  );
}

SearchResult.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
