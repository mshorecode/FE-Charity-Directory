import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function SearchResult({ result }) {
  return (
    <div
      className="search-result"
    >
      <Card style={{
        width: '18rem', backgroundColor: '#2B2D42', color: 'white',
      }}
      >
        <Card.Img variant="top" src={result.imgUrl} alt="Charity Logo" />
        <Card.Body>
          <Card.Title className="text-center">
            {result.name}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

SearchResult.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string,
    imgUrl: PropTypes.string,
  }).isRequired,
};
