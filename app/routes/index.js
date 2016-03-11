import Em from 'ember';

export default Em.Route.extend({

  model() {
    return this.store.findRecord('budget', 2016);
  }

});