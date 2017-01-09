import Em from 'ember';

export default Em.Service.extend({

  store: Em.inject.service(),

  init(props) {
    return this.get('store').createRecord('operation', props);
  }

});
