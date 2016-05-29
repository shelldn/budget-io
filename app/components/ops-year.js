import Ember from 'ember';
import computed from 'ember-computed-decorators';

const OpsYearComponent = Ember.Component.extend({
  
  tagName: 'tbody',

  @computed('categorySet', 'type')
  categories(categorySet, type) {
    return categorySet.filterBy('type', type);
  }

});

OpsYearComponent.reopenClass({
  
  positionalParams: ['months', 'categorySet']
  
});

export default OpsYearComponent;