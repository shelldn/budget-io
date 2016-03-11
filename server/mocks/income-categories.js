/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var incomeCategoriesRouter = express.Router();

  incomeCategoriesRouter.get('/', function(req, res) {
    res.send({
      'income-categories': []
    });
  });

  incomeCategoriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  incomeCategoriesRouter.get('/:id/incomes', function(req, res) {
    res.send({
      data: [{
        type: 'incomes',
        id: 1,
        attributes: {
          plan: 14.75,
          fact: 12.10
        },
        relationships: {
          month: {
            data: {
              type: 'months',
              id: 2
            }
          }
        }
      }]
    });
  });

  incomeCategoriesRouter.put('/:id', function(req, res) {
    res.send({
      'income-categories': {
        id: req.params.id
      }
    });
  });

  incomeCategoriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/income-categories', require('body-parser'));
  app.use('/api/income-categories', incomeCategoriesRouter);
};
