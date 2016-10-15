/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {

    babel: {
      optional: ['es7.decorators']
    }
  });

  app.import('bower_components/moment/moment.js');

  return app.toTree();
};
