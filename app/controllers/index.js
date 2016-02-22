import Em from 'ember';
import computed from 'ember-computed-decorators';

export default Em.Controller.extend({

  @computed
  months() {
    return this.store.peekAll('month');
  },

  incomeCategories: [
    { name: 'Salary' }
  ],

  outgoCategories: [
    { name: 'Taxes' },
    { name: 'Rental' },
    { name: 'Food' },
    { name: 'Clothes' }
  ]

});
