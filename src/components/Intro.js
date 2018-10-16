import React from 'react';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontStyle: props.fontStyle
    }
  }
  render() {
    return (
      <div className="intro">
        <h2>My name is <span className={this.props.fontStyle}>Steve..</span> I am from <span className={this.props.fontStyle}>Classy San Diego, California</span></h2>
        <h2>where the weather is <span className={this.props.fontStyle}>beautiful</span> <span className="ampersand">&</span> the <span className={this.props.fontStyle}>code</span> is <span className={this.props.fontStyle}>sexy.</span></h2>
      </div>
    )
  }
}
export default Intro;
