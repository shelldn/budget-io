import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'section',

  classNames: ['id-wrapper__section', 'id'],

  actions: {

    submit() {
      const { username, password, passwordConfirm } = this.getProperties('username', 'password', 'passwordConfirm');
      this.get('onSubmit')(username, password, passwordConfirm);
    }
  }

});
