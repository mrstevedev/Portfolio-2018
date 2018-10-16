import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewMyProjects extends React.Component {
  render() {
    return (
      <div>
        <Link to="/Projects" class="BoldItalic">View My Projects</Link>
      </div>
    )
  }
}

export default ViewMyProjects;
