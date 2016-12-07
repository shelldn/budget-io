import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Component.extend({

  tagName: 'tr',

  store: Ember.inject.service(),
  monthsProvider: Ember.inject.service(),

  @computed
  months() {
    return this.get('monthsProvider').getAll();
  },

  didReceiveAttrs() {
    const { store, type } = this.getProperties('store', 'type');

    const budget = store.peekRecord('budget', 2016);
    const category = this.get('store').createRecord('category', { budget, type });

    this.set('category', category);
  },

  actions: {

    commit() {
      return this.get('category').save();
    }
  }

});
