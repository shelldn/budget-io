import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({

  host: 'http://budgetio.azurewebsites.net',
  namespace: 'api'

});
