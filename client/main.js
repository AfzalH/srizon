import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { getAppRoutes } from '../imports/startup/client/routes';

Meteor.startup(() => {
  render(getAppRoutes(), document.getElementById('app'));
});
