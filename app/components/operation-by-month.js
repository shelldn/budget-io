import Ember from 'ember';
import computed from 'ember-computed-decorators';

const OperationByMonthComponent = Ember.Component.extend({
  
  tagName: '',
  
  didReceiveAttrs() {
    const operations = this.get('category.operations');
    const monthId = this.get('month.id');

    const op = operations.findBy('month.id', monthId);

    if (typeof op === 'undefined')
      this.attrs['on-init'](this.get('category.type'), this.get('month'));
  },
  
  @computed('month', 'category.operations')
  operation(month, operations) {
    return operations.findBy('month.id', month.get('id'));
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
