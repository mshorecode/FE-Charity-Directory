import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function SearchResult({ result }) {
  return (
    <div
      className="search-result text-center"
    >
      <Card style={{
        width: '25rem', height: '25rem', margin: '8px', backgroundColor: '#fff', color: 'black', boxShadow: '3px 3px 4px #9e9e9e', borderRadius: '18px',
      }}
      >
        <Card.Img variant="top" src={result.imgUrl} alt="Charity Logo" style={{ height: '300px', width: '300px', margin: '0 auto' }} />
        <Card.Body>
          <h3 className="text-center fw-normal">
            {result.name}
          </h3>
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
