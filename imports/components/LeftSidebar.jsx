import React from 'react';
import { Link } from 'react-router';

export default class LeftSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="left-sidebar">
        <div className="row">
          <div className="col-xs-12">
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
          <div className="col-xs-12">
            <nav className="left-menu">
              <ul>
                <li><Link to="/" activeClassName={(this.props.path === '/') ? 'active' : ''}><i
                  className="icon-home"/> Home</Link></li>
                <li><Link to="/products" activeClassName="active"><i className="icon-shop"/> Products</Link></li>
                <li><Link to="/services" activeClassName="active"><i className="icon-web"/> Services</Link></li>
                <li><Link to="/support" activeClassName="active"><i className="icon-forum"/> Contact</Link>
                </li>
                <li><Link to="/blog" activeClassName="active"><i className="icon-edit"/> Blog</Link></li>
                <li><Link to="/tutorials" activeClassName="active"><i className="icon-code"/> Tutorials</Link></li>
                <li><Link to="/login" activeClassName="active"><i className="icon-person"/> Login</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}