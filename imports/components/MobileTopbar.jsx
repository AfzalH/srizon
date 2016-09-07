import React from 'react';
import { Link } from 'react-router';

export default class LeftSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
  }

  toggleState() {
    this.setState({showMenu: !this.state.showMenu});
  }

  render() {
    return (
      <div className="mobile-topbar">
        {this.state.showMenu ?
          <div className="mobile-menu">
            <nav>
              <ul>
                <li><Link to="/" activeClassName={(this.props.path === '/') ? 'active' : ''}  onClick={this.toggleState.bind(this)}><i
                  className="icon-home"/> Home</Link></li>
                <li><Link to="/products" activeClassName="active" onClick={this.toggleState.bind(this)}><i className="icon-shop"/> Products</Link></li>
                <li><Link to="/services" activeClassName="active" onClick={this.toggleState.bind(this)}><i className="icon-web"/> Services</Link></li>
                <li><Link to="/support" activeClassName="active" onClick={this.toggleState.bind(this)}><i className="icon-forum"/> Contact</Link>
                </li>
                <li><Link to="/blog" activeClassName="active" onClick={this.toggleState.bind(this)}><i className="icon-edit"/> Blog</Link></li>
                <li><Link to="/tutorials" activeClassName="active" onClick={this.toggleState.bind(this)}><i className="icon-code"/> Tutorials</Link></li>
              </ul>
            </nav>
          </div>
          : ''
        }
        <div className="row">
          <div className="col-xs-3" onClick={this.toggleState.bind(this)}>
            <span className="menu-button"><i className={this.state.showMenu ? "icon-close" : "icon-menu"}/></span>
          </div>
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
          <div className="col-xs-3 text-right"><span className="account-button"><i className="icon-person"/></span>
          </div>
        </div>
      </div>
    );
  }
}