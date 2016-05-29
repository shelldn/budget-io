import DS from 'ember-data';

export default DS.Model.extend({
  
  month: DS.belongsTo('month'),
  
  plan: DS.attr('number', { defaultValue: 0 }),
  fact: DS.attr('number', { defaultValue: 0 })
  
});
