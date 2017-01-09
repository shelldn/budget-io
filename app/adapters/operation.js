import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  urlForCreateRecord(name, snapshot) {
    const budgetId = snapshot.belongsTo('category').belongsTo('budget').id;
    return `${this.host}/${this.namespace}/budgets/${budgetId}/operations`;
  }

});
