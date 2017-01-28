import Ember from 'ember';
import { equal } from 'ember-computed-decorators';

export default Ember.Component.extend({

  tagName: 'td',
  classNames: 'active-cell',

  classNameBindings: ['isZero:active-cell--zero'],

  @equal('value', 0)
  isZero,

  isEditing: false,

  actions: {

    showEditor() {
      this.set('isEditing', true);
    },

    commit() {
      return this.get('on-change')();
    },

    hideEditor() {
      this.set('isEditing', false);
    }
  }

});
