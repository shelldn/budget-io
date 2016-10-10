import Ember from 'ember';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({

  serverTokenEndpoint: 'http://budgetid.azurewebsites.net/connect/token',

  makeRequest(url, data) {
    data['client_id'] = 'budget.io';
    data['client_secret'] = 'secret';

    return this._super(url, data);
  }

});
