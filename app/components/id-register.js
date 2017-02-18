import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'section',

  classNames: ['id-wrapper__section', 'id'],

  isDisabled: false,

  actions: {

    submit() {
      const {
        username,
        password,
        passwordConfirm
      } = this.getProperties('username', 'password', 'passwordConfirm');

      this.set('isDisabled', true);

      this.get('onSubmit')(username, password, passwordConfirm)
        .then(() => {
          this.set('isDisabled', false);
        });
    }
  }

});
