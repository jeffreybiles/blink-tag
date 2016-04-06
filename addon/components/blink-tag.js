import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'h1',
  show: true,
  classNameBindings: ['show:ember:blink-tag--invisible'],
  didInsertElement: function() {
    var self = this;
    setInterval(function() {
       self.toggleProperty('show');
    }, 300);
  }
});
