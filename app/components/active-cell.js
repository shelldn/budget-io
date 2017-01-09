import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'td',
  classNames: 'active-cell',

  isEditing: false,

  actions: {

    showEditor() {
      this.set('isEditing', true);
    },

    commit() {
      return this.get('on-change')();
    },

    hideEditor() {
      this.set('isEditing', false);
    }
  }

});
