import Em from 'ember';
import computed from 'ember-computed-decorators';

export default Em.Component.extend({

  tagName: '',

  @computed('category.incomes.@each.month', 'month.id')
  income(incomes, monthId) {
    return incomes
      .findBy('month.id', monthId);
  },

  @computed('income')
  hasIncome(income) {
    return !Em.isNone(income);
  }

});
