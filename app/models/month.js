import DS from 'ember-data';
import computed from 'ember-computed-decorators';

export default DS.Model.extend({

  operations: DS.hasMany('operation'),

  @computed('id')
  name(id) {
    return moment.monthsShort()[id - 1];
  }

});
