import DS from 'ember-data';

export default DS.Model.extend({
  
  month: DS.belongsTo('month'),
  
  plan: DS.attr('number'),
  fact: DS.attr('number')
  
});
