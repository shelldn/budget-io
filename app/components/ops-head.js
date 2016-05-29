import Em from 'ember';

const OpsHeadComponent = Em.Component.extend({
  
  tagName: 'thead'
  
});

OpsHeadComponent.reopenClass({

  positionalParams: ['months']

});

export default OpsHeadComponent;