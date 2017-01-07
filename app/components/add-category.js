import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Component.extend({

  tagName: 'tr',

  monthsProvider: Ember.inject.service(),

  isEditing: false,

  @computed
  months() {
    return this.get('monthsProvider').getAll();
  },

  actions: {
    showEditor() {
      this.set('isEditing', true);
    }
  }

});
