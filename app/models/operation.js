import DS from 'ember-data';

export default DS.Model.extend({
  
  budget: DS.belongsTo('budget'),
  category: DS.belongsTo('category'),
  month: DS.belongsTo('month'),
  
  plan: DS.attr('number', { defaultValue: 0 }),
  fact: DS.attr('number', { defaultValue: 0 })
  
});
