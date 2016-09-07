import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.props.key = this.props.location.key;
  }

  render() {
    return (
      <div className="ibox">
        <div className="ibox-content">
          <h1 className="no-top-margin">Home</h1>
          <h2 className="no-top-margin">Lorem ipsum dolor sit amet</h2>
          <h3 className="no-top-margin">Lorem ipsum dolor sit amet</h3>
          <h4 className="no-top-margin">Lorem ipsum dolor sit amet</h4>
          <h5 className="no-top-margin">Lorem ipsum dolor sit amet</h5>
          <h6 className="no-top-margin">Lorem ipsum dolor sit amet</h6>
          <p>
            All config options you can trun on/off from the theme box configuration
            (green
            icon
            on the left
            side of page).
          </p>

        </div>
      </div>
    );
  }
}