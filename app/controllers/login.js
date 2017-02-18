import Ember from 'ember';
import ENV from 'web-client/config/environment';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),

  actions: {

    authenticate() {
      let { username, password } = this.getProperties('username', 'password');

      this.get('session').authenticate('authenticator:oauth2', username, password, 'api');
    },

    register(username, password, passwordConfirmation) {
      return $.ajax({
        method: 'POST',
        url: `${ENV.id.host}/register`,
        contentType: 'application/json',
        data: JSON.stringify({
          username,
          password,
          passwordConfirmation
        })
      });
    }
  }

});
