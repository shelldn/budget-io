import Em from 'ember';
import computed, { mapBy, sum } from 'ember-computed-decorators';

export default Em.Component.extend({

  tagName: '',

  @mapBy('month.incomes', 'plan')
  plans,

  @mapBy('month.incomes', 'fact')
  facts,

  @sum('plans')
  totalPlan,

  @sum('facts')
  totalFact

});
