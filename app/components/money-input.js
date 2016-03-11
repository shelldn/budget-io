import Em from 'ember';

export default Em.TextField.extend({

  click() {
    this.$().select();
  },

  focusOut() {
    this.attrs['on-update']();
  },

  _elementValueDidChange() {
    this.set('value', parseFloat(this.readDOMAttr('value')) || 0);
  }

});
