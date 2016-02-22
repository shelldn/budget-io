import DS from 'ember-data';

export default DS.Model.extend({

  plan: DS.attr('number'),
  fact: DS.attr('number'),

  month: DS.belongsTo('month')

});
