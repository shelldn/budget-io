import Em from 'ember';

export default Em.TextField.extend({

  classNames: ['add-category__input'],

  placeholder: 'New Category',

  keyDown(e) {
    switch (e.keyCode) {
      case 13:
        this.get('on-change')(e.target.value);
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this.$().focus();
  }

});
