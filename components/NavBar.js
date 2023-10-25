/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
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
      <Button variant="danger" onClick={signOut} style={{ margin: '0px 20px 0px 0px' }}>Sign Out</Button>
    </Navbar>
  );
}
