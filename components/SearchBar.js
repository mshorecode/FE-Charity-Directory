import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState('');

  const fetchData = (value) => {
    fetch('https://localhost:7287/charity')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((name) => value && name && name.name && name.name.toLowerCase().includes(value));
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <Form className="search-bar">
      <div className="search-box">
        <input
          type="text"
          className="form-control"
          placeholder="Search Charities"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </Form>
  );
}

SearchBar.propTypes = {
  setResults: PropTypes.func.isRequired,
};
