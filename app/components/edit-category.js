import Em from 'ember';
import { reads } from 'ember-computed-decorators';

const EditCategoryComponent = Em.Component.extend({

  tagName: 'td',
  classNames: 'active-cell',

  isEditing: false,

  @reads('category.name')
  value,

  actions: {

    showEditor() {
      this.set('isEditing', true);
    },

    hideEditor() {
      this.set('isEditing', false);
    }
  }

});

EditCategoryComponent.reopenClass({

  positionalParams: ['category']

});

export default EditCategoryComponent;
