import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  model() {

    [...Array(12).keys()]
      .map(id => this.store.createRecord('month', { id }))

    return this.store.peekAll('month');
  }

});
