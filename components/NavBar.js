/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link passHref href="/">
          <Navbar.Brand style={{ margin: '0px 10px 0px 20px' }}>Charity Directory</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link passHref href="/charities/view">
            <Nav.Link>Charities</Nav.Link>
          </Link>
          <Link passHref href="/search">
            <Nav.Link className="me-auto">Search</Nav.Link>
          </Link>
        </Nav>
        <div>
          <Button variant="danger" onClick={signOut} style={{ margin: '0px 20px 0px 0px' }}>Sign Out</Button>
        </div>
      </Navbar>
    </>
  );
}
