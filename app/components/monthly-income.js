import Em from 'ember';
import computed from 'ember-computed-decorators';

export default Em.Component.extend({

  tagName: '',

  store: Em.inject.service(),

  didReceiveAttrs() {
    this.get('category.incomes')
      .then(incomes => {
        this.set('income', incomes.findBy('month.id', this.get('month.id')) || this.get('store').createRecord('income', { plan: 0, fact: 0, month: this.get('month') }));
      });
  },

  @computed('income')
  hasIncome(income) {
    return !Em.isNone(income);
  },

  actions: {
    commit() {
      this.get('income').save();
    }
  }

});
