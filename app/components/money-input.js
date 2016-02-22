import Em from 'ember';

export default Em.TextField.extend({

  _elementValueDidChange() {
    this.set('value', parseFloat(this.readDOMAttr('value')) || 0);
  }

});
