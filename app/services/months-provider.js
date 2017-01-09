import Em from 'ember';

export default Em.Service.extend({

  store: Em.inject.service(),

  getAll() {
    return this.get('store').peekAll('month');
  }

});
