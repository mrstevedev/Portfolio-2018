import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DownloadResume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontStyle: props.fontStyle,
      customStyle: props.marginTop
    }
  }
  render() {
    return (
      <div className={this.props.customStyle}>
        <Link to="../../public/files/Pulido_Steven_Resume_October2018.pdf" target="_self" className={this.props.fontStyle+` download-link`} download="Pulido_Steven_Resume_October2018.pdf">Download My Resume <i className="fas fa-file-download"></i></Link>
      </div>
    )
  }
}

export default DownloadResume;
