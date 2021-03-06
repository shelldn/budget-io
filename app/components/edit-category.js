import Em from 'ember';
import { alias } from 'ember-computed-decorators';

const EditCategoryComponent = Em.Component.extend({

  tagName: 'td',
  classNames: ['edit-category'],

  isEditing: false,

  @alias('category.name')
  value,

  actions: {

    showEditor() {
      this.set('isEditing', true);
    },

    commit() {
      this.get('category')
        .save()
        .then(() => this.set('isEditing', false));
    },

    delete() {
      if (!confirm('Delete category?'))
        return;

      this.get('category')
        .destroyRecord();
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
