import Em from 'ember';

export default Em.TextField.extend({

  classNames: ['add-category__input'],

  placeholder: 'New Category',

  didInsertElement() {
    this._super(...arguments);
    this.$().focus();
  }

});
