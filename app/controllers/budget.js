import Em from 'ember';
import computed from 'ember-computed-decorators';

export default Em.Controller.extend({

  @computed('model')
  previousId() {
    return parseInt(this.get('model.id')) - 1;
  },

  @computed('model')
  nextId() {
    return parseInt(this.get('model.id')) + 1;
  },

  @computed
  months() {
    return this.store.peekAll('month');
  },

  @computed
  incomeCategories() {
    return this.store.peekAll('incomeCategory');
  },

  @computed
  outgoCategories() {
    return this.store.peekAll('outgoCategory');
  },

  actions: {

    addCategory() {
      this.store.createRecord('incomeCategory', { name: 'New category' });
    },

    addOutgoCategory() {
      this.store.createRecord('outgoCategory', { name: 'New category' });
    }
  }

});
