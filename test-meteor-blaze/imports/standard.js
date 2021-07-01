import { Template } from 'meteor/templating';

import { destroy, init } from '../imports/init';

import './standard.html';

Template.standard.onRendered(function () {
  init();
})

Template.standard.onDestroyed(function () {
  destroy();
});
