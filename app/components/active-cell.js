import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'td',
  classNames: 'active-cell',

  keyPress(e) {
    if (e.which === 13)
      this.$().blur();
  },

  focusOut() {
    this.attrs['on-update']();
  }

});
