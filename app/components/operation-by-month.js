import Em from 'ember';
import computed from 'ember-computed-decorators';

const OperationByMonthComponent = Em.Component.extend({
  
  tagName: '',

  operationManager: Em.inject.service(),
  
  didReceiveAttrs() {
    const operations = this.get('category.operations');
    const monthId = this.get('month.id');

    const op = operations.findBy('month.id', monthId);

    if (!op)
      Em.run.scheduleOnce('afterRender', this, () => {
        const { budget, category, month, operationManager } = this.getProperties('budget', 'category', 'month', 'operationManager');

        const op = operationManager.init({ budget, category, month });

        operations.addObject(op);
      });
  },
  
  @computed('month', 'category.operations')
  operation(month, operations) {
    return operations.findBy('month.id', month.get('id'));
  },
  
  actions: {
    commit() {
      return this.get('operation').save();
    }
  }
  
});

OperationByMonthComponent.reopenClass({
  
  positionalParams: ['budget', 'category', 'month']
  
});

export default OperationByMonthComponent;
