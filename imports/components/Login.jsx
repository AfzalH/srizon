import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ibox">
        <div className="ibox-content text-center">
          <h1 className="no-top-margin">Login Form</h1>
          <AccountsUIWrapper />
          {this.props.user?
            <h2>Welcome, User</h2>
            :
            ''
          }
        </div>
      </div>
    );
  }
}
