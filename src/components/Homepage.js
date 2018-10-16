import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Greeting from './Greeting';
import Intro from './Intro';
import Subtext from './Subtext';
import DownloadResume from './DownloadResume';
import ViewMyProjects from './ViewMyProjects';

class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Greeting
            fontStyle="charterBlack"
          />
          <Intro
            fontStyle="charterblackItalic"
          />
          <Subtext />
          <DownloadResume
            fontStyle="charterblackItalic"
          />
      </React.Fragment>
    )
  }
}

export default Homepage;
