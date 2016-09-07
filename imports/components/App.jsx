import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// imported componenets
import LeftSidebar from './LeftSidebar';
import MobileTopbar from './MobileTopbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-3 hidden-xs">
            <LeftSidebar path={this.props.location.pathname}/>
          </div>
          <div className="col-xs-12 visible-xs">
            <MobileTopbar path={this.props.location.pathname}/>
          </div>
          <div className="col-sm-8 col-md-9 col-xs-12">
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={200}
              transitionLeave={false}>
              {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}