import React from 'react';
import { Link } from 'react-router';

export default class LeftSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mobile-topbar">
        <div className="row">
          <div className="col-xs-3">Burger</div>
          <div className="col-xs-6 text-center">
            <div className="srizon-logo">
              {(this.props.path !== '/') ?
                <Link to="/">
                  <img src="/images/logo.svg" alt="Srizon Logo"/>
                </Link>
                :
                <img src="/images/logo.svg" alt="Srizon Logo"/>
              }
            </div>
          </div>
          <div className="col-xs-3 text-right">???</div>
        </div>
      </div>
    );
  }
}