import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontStyle: props.fontStyle
    }
  }
  render() {
    return (
      <React.Fragment>
          <h1 className={this.props.fontStyle}>ERROR 404.</h1>
          <p>The page you were looking for was not found.</p>
          <p>But here is some nice negative space & typography to admire.</p><br />
        <p>While you are here, <span class="charterblackItalic">check out my recent projects.</span></p>
      </React.Fragment>
    )
  }
}

export default Error;
