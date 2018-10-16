import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DownloadResume from './DownloadResume';
import DownloadLink from "react-download-link";

class About extends React.Component {
  render() {
    return (
        <div className="about">
          <div className="about-left">
            <h1>About Me.</h1>
            <p>
              Hi & welcome. Thank you for taking the time to check me out. I am from <span class="charterblackItalic">Beautiful & Classy San Diego, California.</span>
            </p>
            <br />
            <p>
              I have been a developer for 8 years with experience in various web development technologies. The technologies we have today are used to solve problems & People help solve problems with these tools. I take pride in pushing the boundaries of web design & development.
            </p>
            <DownloadResume
              fontStyle="charterItalic download-link"
              customStyle="download-link-container"
            />
          </div>
          <div className="about-right">

            <p className="skills-title">
              # webpack.config.json
            </p>
            <p className="skills">

                  module.exports = &#123;
                    <br/>
                    entry: [‘@babel/polyfill’, ‘./src/index.js’],
                    output: &#123;<br/>
                    &nbsp;&nbsp;&nbsp;path: path.join(__dirname, ‘/dist’),
                    &nbsp;&nbsp;&nbsp;publicPath: ‘/’,<br/>
                    &nbsp;&nbsp;&nbsp;filename: ‘index_bundle.js’ <br/>
                    &nbsp;&nbsp;&nbsp;&#125;<br/>
                    &#125;

            </p>
          </div>
        </div>
    )
  }
}

export default About;
