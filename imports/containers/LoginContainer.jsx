import { createContainer } from 'meteor/react-meteor-data';
import Login from '../components/Login';

export default createContainer(()=> {
  return {
    user: Meteor.user()
  };
}, Login);
