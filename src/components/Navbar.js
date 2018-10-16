import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Link to="/">
            <Logo />
          </Link>
          <HamburgerMenu />
        </header>
      </React.Fragment>
    )
  }
}

export default Navbar;
