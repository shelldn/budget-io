import Ember from 'ember';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from 'web-client/config/environment';

export default OAuth2PasswordGrant.extend({

  serverTokenEndpoint: `${ENV.id.host}/connect/token`,

  makeRequest(url, data) {
    data['client_id'] = 'budget.io';
    data['client_secret'] = 'secret';

    return this._super(url, data);
  }

});
