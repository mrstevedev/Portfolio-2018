import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontStyle: props.fontStyle
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="greeting">
          <h1><span className="greeting-bracket">[</span><span class={this.props.fontStyle}>Hi.</span><span className="greeting-bracket">]</span></h1>
        </div>
      </React.Fragment>
    )
  }
}
export default Greeting;
