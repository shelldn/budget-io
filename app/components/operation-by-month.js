import Ember from 'ember';
import computed from 'ember-computed-decorators';

const OperationByMonthComponent = Ember.Component.extend({
  
  tagName: '',
  
  store: Ember.inject.service(),
  
  @computed('month', 'category.operations')
  operation(month, operations) {
    return operations.findBy('month.id', month.get('id')) ||
      this.get('store')
        .createRecord('operation', { 
          type: this.get('category.type'), 
          month
        });
  },
  
  actions: {
    commit() {
      this.get('operation').save();
    }
  }
  
});

OperationByMonthComponent.reopenClass({
  
  positionalParams: ['month', 'category']
  
});

export default OperationByMonthComponent;
