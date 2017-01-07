import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Component.extend({

  tagName: 'tr',

  categoryManager: Ember.inject.service(),
  monthsProvider: Ember.inject.service(),

  isEditing: false,

  @computed
  months() {
    return this.get('monthsProvider').getAll();
  },

  actions: {
    showEditor() {
      this.set('isEditing', true);
    },

    commit(name) {
      const { budget, type } = this.getProperties('budget', 'type');

      this.get('categoryManager').create({
        name,
        type,
        budget
      })
    }
  }

});
