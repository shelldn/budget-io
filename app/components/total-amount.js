import Ember from 'ember';
import { filter, mapBy, sum } from 'ember-computed-decorators';

const TotalAmountComponent = Ember.Component.extend({
  
  tagName: '',

  @filter('operations', function(o) {
    return o.get('category.type') === this.get('type');
  })
  _operations,

  @mapBy('_operations', 'plan')
  _plans,
  
  @mapBy('_operations', 'fact')
  _facts,

  @sum('_plans')
  plan,
  
  @sum('_facts')
  fact
  
});

TotalAmountComponent.reopenClass({
  
  positionalParams: ['operations', 'type']
  
});

export default TotalAmountComponent;
