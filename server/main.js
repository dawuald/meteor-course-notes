import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import '../imports/api/notes'; // creates the collection
import '../imports/startup/simple-schema-configuration';


Meteor.startup(() => {
});