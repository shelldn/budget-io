import Em from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Em.Route.extend(AuthenticatedRouteMixin, {

  model() {
    return this.store.findRecord('budget', 2016)
      .then(b => {
        b.get('operations');
        return b;
      });
  }

});
