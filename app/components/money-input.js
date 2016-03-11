import Em from 'ember';

export default Em.TextField.extend({

  click() {
    this.$().select();
  },

  keyPress(e) {
    if (e.which === 13)
      this.$().blur();
  },

  focusOut() {
    this.attrs['on-update']();
  },

  _elementValueDidChange() {
    this.set('value', parseFloat(this.readDOMAttr('value')) || 0);
  }

});
