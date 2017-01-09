import Em from 'ember';
import computed from 'ember-computed-decorators';

const OpsYearComponent = Em.Component.extend({
  
  tagName: 'tbody',

  @computed('type')
  headerClass(type) {
    return `budget-table__${type}-header`;
  },

  @computed('categorySet', 'type')
  categories(categorySet, type) {
    return categorySet.filterBy('type', type);
  },

  actions: {
    commit(category) {
      return category.save();
    }
  }

});

OpsYearComponent.reopenClass({
  
  positionalParams: ['months', 'categorySet']
  
});

export default OpsYearComponent;
