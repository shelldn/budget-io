import DS from 'ember-data';

export default DS.Model.extend({
  
  type: DS.attr('string'),
  name: DS.attr('string'),
  
  budget: DS.belongsTo('budget'),
  operations: DS.hasMany('operation')
  
});
