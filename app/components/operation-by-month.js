import Em from 'ember';
import computed from 'ember-computed-decorators';

const OperationByMonthComponent = Em.Component.extend({
  
  tagName: '',

  store: Em.inject.service(),
  
  didReceiveAttrs() {
    const operations = this.get('category.operations');
    const monthId = this.get('month.id');

    const op = operations.findBy('month.id', monthId);

    if (typeof op === 'undefined')
      Em.run.scheduleOnce('afterRender', this, () => {
        const op = this.get('store').createRecord('operation', {
          type: this.get('category.type'),
          month: this.get('month')
        });

        operations.addObject(op);
      });
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
