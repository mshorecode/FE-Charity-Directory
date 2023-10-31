import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState([]);

  // fetches data to display on dom
  const fetchData = (value) => {
    fetch('https://localhost:7287/charity')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((name) => value && name.name.toLowerCase().includes(value));
        setResults(results);
      });
  };

  // allows for input and fetches equivalent data to display
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  // prevents user from hitting enter to reset form
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          className="search-box"
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
