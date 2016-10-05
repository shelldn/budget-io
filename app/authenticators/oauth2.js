import Ember from 'ember';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({

  serverTokenEndpoint: 'http://budgetid.azurewebsites.net/token',

  authenticate(options) {
    Oidc.Log.logger = console;

    const mgr = new Oidc.UserManager({
      authority: 'http://budgetid.azurewebsites.net',
      // authority: 'http://localhost:5000',
      client_id: 'budget.io',
      redirect_uri: 'http://shelldn-ubuntu.westeurope.cloudapp.azure.com:4200/callback',
      response_type: 'id_token token',
      scope: 'openid profile'
    });

    // return mgr.signinRedirect();
    return mgr.signinPopup();
  }

});
