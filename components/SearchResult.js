import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function SearchResult({ result }) {
  return (
    <div
      className="search-result"
    >
      <Card style={{
        width: '25rem', height: '25rem', margin: '8px', backgroundColor: '#fff', color: 'black', boxShadow: '3px 3px 4px #9e9e9e', borderRadius: '18px',
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
