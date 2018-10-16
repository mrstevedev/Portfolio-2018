import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1 className={this.props.fontStyle}>My Projects.</h1>
      </div>
    )
  }
}

export default Projects;
