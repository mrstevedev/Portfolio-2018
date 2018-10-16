import React, { Component } from 'react';

class HamburgerMenu extends React.Component {
  handleHamburger(e) {
    const hamburgerMenuBtn = document.querySelector('.hamburger');
    hamburgerMenuBtn.classList.toggle('is-active');
  }
  render() {
    return (
      <nav role="navigation">
        <div class="overlay">
          <button class="hamburger hamburger--elastic-r" type="button" onClick={this.handleHamburger.bind(this)}>
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
      </nav>
    )
  }
}
export default HamburgerMenu;
