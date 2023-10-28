/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Navbar, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import SearchBar from './SearchBar';
import SearchResultsList from './SearchResultsList';

export default function NavBar() {
  const [results, setResults] = useState([]);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link passHref href="/">
          <Navbar.Brand style={{ margin: '0px 10px 0px 20px' }}>Charity Directory</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
          <Link passHref href="/charities/view">
            <Nav.Link>Charities</Nav.Link>
          </Link>
        </Nav>
        <div className="s-in">
          <SearchBar setResults={setResults} />
          <Button variant="danger" onClick={signOut} style={{ margin: '0px 20px 0px 0px' }}>Sign Out</Button>
        </div>
      </Navbar>
      <div className="under-search">
        <SearchResultsList results={results} />
      </div>
    </>
  );
}
