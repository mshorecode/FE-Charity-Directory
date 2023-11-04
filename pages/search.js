import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResultsList from '../components/SearchResultsList';

export default function SearchPage() {
  const [results, setResults] = useState([]);
  return (
    <>
      <div className="search-container mt-5">
        <h1 className="mb-3">Search Charities</h1>
        <SearchBar setResults={setResults} />
      </div>
      <div className="underneath d-flex justify-content-center flex-wrap">
        <SearchResultsList results={results} />
      </div>
    </>
  );
}
