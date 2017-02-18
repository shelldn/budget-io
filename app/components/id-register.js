import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {

  tagName: 'section',

  classNames: ['id-wrapper__section', 'id'],

  isDisabled: false,

  validations: {
    password: {
      confirmation: true
    }
  },

  actions: {

    submit() {
      const {
        username,
        password,
        passwordConfirmation
      } = this.getProperties('username', 'password', 'passwordConfirmation');

      this.set('isDisabled', true);

      this.get('onSubmit')(username, password, passwordConfirmation)
        .then(() => {
          this.set('isDisabled', false);
        });
    }
  }

});
