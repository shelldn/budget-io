import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  urlForUpdateRecord(id, name, snapshot) {
    const budgetId = snapshot.belongsTo('budget').id;
    return `${this.host}/${this.namespace}/budgets/${budgetId}/categories/${id}`;
  }

});
