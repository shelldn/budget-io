/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var budgetsRouter = express.Router();

  const BUDGETS = [
    { id: 1 }
  ];

  budgetsRouter.get('/', function(req, res) {
    res.send({
      'budgets': {
        "data": BUDGETS.map(b => ({ id: b.id, type: 'budgets' }))
      }
    });
  });

  budgetsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  budgetsRouter.get('/:id', function(req, res) {
    res.send({
      data: {
        id: 2016,
        type: 'budgets',
        relationships: {
          'income-categories': {
            data: [
              { type: 'income-categories', id: 1 },
              { type: 'income-categories', id: 2 }
            ]
          },
          'outgo-categories': {
            data: [
              { type: 'outgo-categories', id: 1 },
              { type: 'outgo-categories', id: 2 },
              { type: 'outgo-categories', id: 3 }
            ]
          }
        }
      },
      included: [{
        type: 'income-categories',
        id: 1,
        attributes: {
          name: 'Salary'
        },
        relationships: {
          incomes: {
            data: [
              {type: 'incomes', id: 1}
            ]
          }
        }
      }, {
        type: 'income-categories',
        id: 2,
        attributes: {
          name: 'Bank Account'
        },
        relationships: {
          incomes: {
            data: [
              { type: 'incomes', id: 2 }
            ]
          }
        }
      }]
    });
  });

  budgetsRouter.put('/:id', function(req, res) {
    res.send({
      'budgets': {
        id: req.params.id
      }
    });
  });

  budgetsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/budgets', require('body-parser'));
  app.use('/api/budgets', budgetsRouter);
};
