import Em from 'ember';

export default Em.Service.extend({

  store: Em.inject.service(),

  create(props) {
    const category = this.get('store').createRecord('category', props);
    return category.save();
  }

});
