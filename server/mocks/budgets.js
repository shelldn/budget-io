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
    
    const INCOME_CATEGORIES = [
      'Salary',
      'Bank Account'
    ];
    
    const OUTGO_CATEGORIES = [
      'Food',
      'Travel',
      'Car',
      'Dog',
      'Entertainment'
    ];

    const INCOMES = [
      { month: 1, plan: 10, fact: 20 },
      { month: 2, plan: 50, fact: 40 }
    ];
    
    const OUTGOES = [];
    
    res.send({
      data: {
        id: 2016,
        type: 'budgets',
        relationships: {
          categories: {
            data: INCOME_CATEGORIES.map((_, i) => ({
              id: i + 1,
              type: 'categories'
            })).concat(OUTGO_CATEGORIES.map((_, i) => ({
              id: INCOME_CATEGORIES.length + i + 1,
              type: 'categories'
            })))
          },
          operations: {
            data: INCOMES.map((_, i) => ({
              id: i + 1,
              type: 'operations'
            })).concat(OUTGOES.map((_, i) => ({
              id: INCOMES.length + i + 1,
              type: 'operations'
            })))
          }
        }
      },
      included:
        INCOME_CATEGORIES.map((c, i) => ({
          id: i + 1,
          type: 'categories',
          attributes: {
            type: 'income',
            name: c
          }  
        })).concat(OUTGO_CATEGORIES.map((c, i) => ({
          id: INCOME_CATEGORIES.length + i + 1,
          type: 'categories',
          attributes: {
            type: 'outgo',
            name: c
          }
        }))).concat(INCOMES.map((op, i) => ({
          id: i + 1,
          type: 'operations',
          attributes: {
            plan: op.plan,
            fact: op.fact
          },
          relationships: {
            month: {
              data: {
                id: op.month, type: 'months'
              }
            }
          }
        })))
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
