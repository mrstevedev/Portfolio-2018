import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
          <h1 className={this.props.fontStyle}>Contact Me.</h1>
          <ul className="contact-list">
            <li><Link to="#">
              <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="9 6 24 24">
                <defs>

                </defs>
                <g class="cls-2" transform="matrix(1, 0, 0, 1, 0, 0)">
                  <path id="iconmonstr-email-10-2" data-name="iconmonstr-email-10" class="cls-1" d="M12,.02a12,12,0,1,0,12,12,12,12,0,0,0-12-12ZM18.99,7,12,12.666,5.009,7H18.99ZM19,17H5V8.495l7,5.673L19,8.5Z" transform="translate(9 5.98)"/>
                </g>
              </svg>
              hi@mrstevedev.io</Link></li>
            <li><Link to="#">
              <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23.408">
                <defs>
                </defs>
                <path id="iconmonstr-github-1" class="cls-1" d="M12,0A12,12,0,0,0,8.207,23.387c.6.111.793-.261.793-.577V20.576C5.662,21.3,4.967,19.16,4.967,19.16A3.178,3.178,0,0,0,3.634,17.4c-1.089-.745.083-.729.083-.729a2.519,2.519,0,0,1,1.839,1.237,2.554,2.554,0,0,0,3.492,1,2.546,2.546,0,0,1,.762-1.6C7.145,17,4.343,15.971,4.343,11.374A4.644,4.644,0,0,1,5.579,8.153,4.316,4.316,0,0,1,5.7,4.977S6.7,4.655,9,6.207a11.374,11.374,0,0,1,6.009,0c2.291-1.552,3.3-1.23,3.3-1.23a4.312,4.312,0,0,1,.118,3.176,4.632,4.632,0,0,1,1.235,3.221c0,4.609-2.807,5.624-5.479,5.921A2.868,2.868,0,0,1,15,19.517V22.81c0,.319.192.694.8.576A12,12,0,0,0,12,0Z"/>
              </svg>

              github.com/mrstevedev</Link></li>
            <li><Link to="#">
              <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <defs>
                </defs>
                <path id="iconmonstr-linkedin-4" class="cls-1" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM10,16H8V10h2ZM9,9.109A1.109,1.109,0,1,1,10.1,8,1.1,1.1,0,0,1,9,9.109ZM17,16H15V13.139c0-1.881-2-1.722-2,0V16H11V10h2v1.093c.872-1.616,4-1.736,4,1.548Z"/>
              </svg>

              LinkedIn</Link></li>
          </ul>
      </React.Fragment>
    )
  }
}

export default Contact;
