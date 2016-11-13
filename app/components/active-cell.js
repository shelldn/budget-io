import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'td',
  classNames: 'active-cell',

  isEditing: false,

  focusOut() {
    this.attrs['on-update']();
  },

  actions: {

    showEditor() {
      this.set('isEditing', true);
    }
  }

});
