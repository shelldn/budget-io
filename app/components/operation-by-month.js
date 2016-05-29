import Ember from 'ember';
import computed from 'ember-computed-decorators';

const OperationByMonthComponent = Ember.Component.extend({
  
  tagName: '',
  
  @computed('month', 'category.operations')
  operation(month, operations) {
    return operations.findBy('month.id', month.get('id'));
  }
  
});

OperationByMonthComponent.reopenClass({
  
  positionalParams: ['month', 'category']
  
});

export default OperationByMonthComponent;
