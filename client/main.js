import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections';

import './main.html';

Template.body.helpers({
  // notes:[
  //   {text:'My Note 1'},
  //   {text:'My Note 2'},
  //   {text:'My Note 3'}
  // ]

  notes(){
    console.log(Notes.find({}));
    return Notes.find({});
  }
});
Template.add.events({
  'submit form':function(){
    console.log("wow");
    event.preventDefault();
    return false;
  }
});



