import Em from 'ember';
import computed, { filterBy, mapBy, sum } from 'ember-computed-decorators';

const DiffAmountComponent = Em.Component.extend({

  tagName: '',

  @filterBy('operations', 'category.type', 'income')
  _incomes,

  @filterBy('operations', 'category.type', 'outgo')
  _outgoes,

  @mapBy('_incomes', 'plan')
  _incomePlans,

  @mapBy('_incomes', 'fact')
  _incomeFacts,

  @mapBy('_outgoes', 'plan')
  _outgoPlans,

  @mapBy('_outgoes', 'fact')
  _outgoFacts,

  @sum('_incomePlans')
  _incomePlan,

  @sum('_incomeFacts')
  _incomeFact,

  @sum('_outgoPlans')
  _outgoPlan,

  @sum('_outgoFacts')
  _outgoFact,

  @computed('_incomePlan', '_outgoPlan')
  plan(a, b) {
    return a - b;
  },

  @computed('_incomeFact', '_outgoFact')
  fact(a, b) {
    return a - b;
  }

});

DiffAmountComponent.reopenClass({

  positionalParams: ['operations']

});

export default DiffAmountComponent;
