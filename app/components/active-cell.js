import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'td',
  classNames: 'active-cell',

  focusOut() {
    this.attrs['on-update']();
  }

});
