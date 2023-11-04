import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import SearchResult from './SearchResult';

export default function SearchResultsList({ results }) {
  const router = useRouter();

  return (
    <Form className="d-flex justify-content-center flex-wrap">
      {results.map((result) => (
        <Button
          id="result-btn"
          key={result.id}
          onClick={() => router.push(`/charities/${result.id}`)}
        >
          <SearchResult result={result} key={result.id} />
        </Button>
      ))}
    </Form>
  );
}

SearchResultsList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};
