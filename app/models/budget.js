import DS from 'ember-data';

export default DS.Model.extend({

  incomeCategories  : DS.hasMany('incomeCategory'),
  outgoCategories   : DS.hasMany('outgoCategory')

});
