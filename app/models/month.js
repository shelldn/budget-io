import DS from 'ember-data';
import computed from 'ember-computed-decorators';

export default DS.Model.extend({

  incomes: DS.hasMany('income'),

  @computed('id')
  name(id) {
    return moment.monthsShort()[id - 1];
  }

});
