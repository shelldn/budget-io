import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'td',
  classNames: 'active-cell',

  isEditing: false,

  focusOut() {
    this.attrs['on-update']();
  },

  displayDoubleClick(e) {
    e.preventDefault();
    this.set('isEditing', true);
  },

  didInsertElement() {
    this.$('.active-cell__display').dblclick(this.displayDoubleClick.bind(this));
  },

  willDestroyElement() {
    this.$('.active-cell__display').off('dblclick');
  }

});
