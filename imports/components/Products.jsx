import React from 'react';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="ibox">
          <div className="ibox-content">
            <h1 className="no-top-margin">Products</h1>
            <h6>Select a product from the list below</h6>

          </div>
        </div>
        <div className="ibox">
          <div className="ibox-content">
            <h3 className="no-top-margin">Joomla</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi consectetur
              dignissimos
              dolor dolore ipsam magnam, odit perspiciatis quis ut!</p>
          </div>
        </div>
        <div className="ibox">
          <div className="ibox-content">
            <h3 className="no-top-margin">WordPress</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque blanditiis cum cupiditate
              debitis,
              facere fuga neque nulla placeat quasi. Assumenda consequatur et iusto laborum quas rem ut
              voluptas
              voluptatum?</p>
          </div>
        </div>
      </div>

    );
  }
}