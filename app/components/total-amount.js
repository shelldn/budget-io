import Ember from 'ember';
import { mapBy, sum } from 'ember-computed-decorators';

const TotalAmountComponent = Ember.Component.extend({
  
  tagName: '',
  
  @mapBy('operations', 'plan')
  _plans,
  
  @mapBy('operations', 'fact')
  _facts,
  
  @sum('_plans')
  plan,
  
  @sum('_facts')
  fact
  
});

TotalAmountComponent.reopenClass({
  
  positionalParams: ['operations']
  
});

export default TotalAmountComponent;
