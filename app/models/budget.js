import DS from 'ember-data';

export default DS.Model.extend({
  
  months: DS.hasMany('month'),
  categories: DS.hasMany('category'),
  operations: DS.hasMany('operation')

});
