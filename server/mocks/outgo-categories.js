/*jshint node:true*/

var OUTGO_CATEGORIES = {
  1: 'Clothes',
  2: 'Car',
  3: 'Education'
};

module.exports = function(app) {
  var express = require('express');
  var outgoCategoriesRouter = express.Router();

  outgoCategoriesRouter.get('/', function(req, res) {
    res.send({
      'outgo-categories': []
    });
  });

  outgoCategoriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  outgoCategoriesRouter.get('/:id', function(req, res) {
    res.send({
      data: {
        type: 'outgo-categories',
        id: req.params.id,
        attributes: {
          name: OUTGO_CATEGORIES[req.params.id]
        }
      }
    });
  });

  outgoCategoriesRouter.put('/:id', function(req, res) {
    res.send({
      'outgo-categories': {
        id: req.params.id
      }
    });
  });

  outgoCategoriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/outgo-categories', require('body-parser'));
  app.use('/api/outgo-categories', outgoCategoriesRouter);
};
