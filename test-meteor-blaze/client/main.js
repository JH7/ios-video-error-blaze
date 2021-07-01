import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import '../imports/standard.js';
import '../imports/workaround.js';

Template.body.onCreated(function () {
  this.isWorking = new ReactiveVar(false);
})

Template.body.helpers({
  showWorking() {
    return Template.instance().isWorking.get();
  },
})

Template.body.events({
  'click #switch'(event, templateInstance) {
    templateInstance.isWorking.set(!templateInstance.isWorking.get());
  }
})
