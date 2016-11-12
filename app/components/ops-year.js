import Ember from 'ember';
import computed from 'ember-computed-decorators';

const OpsYearComponent = Ember.Component.extend({
  
  tagName: 'tbody',

  store: Ember.inject.service(),

  @computed('categorySet', 'type')
  categories(categorySet, type) {
    return categorySet.filterBy('type', type);
  },

  actions: {
    commit(category) {
      category.save();
    },

    init(type, month) {
      Ember.run.scheduleOnce('afterRender', this, () => {
        this.get('store')
          .createRecord('operation', { 
            type: this.get('category.type'), 
            month
          });
      });
    }
  }

});

OpsYearComponent.reopenClass({
  
  positionalParams: ['months', 'categorySet']
  
});

export default OpsYearComponent;
