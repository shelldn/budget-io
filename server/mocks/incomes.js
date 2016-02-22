/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var incomesRouter = express.Router();

  incomesRouter.get('/', function(req, res) {
    res.send({
      'incomes': []
    });
  });

  incomesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  incomesRouter.get('/:id', function(req, res) {
    res.send({
      data: {
        type: 'incomes',
        id: req.params.id,
        attributes: {
          plan: 7.5 / req.params.id,
          fact: 7.5 * req.params.id
        },
        relationships: {
          month: {
            data: {
              type: 'months',
              id: 1
            }
          }
        }
      }
    });
  });

  incomesRouter.put('/:id', function(req, res) {
    res.send({
      'incomes': {
        id: req.params.id
      }
    });
  });

  incomesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/incomes', require('body-parser'));
  app.use('/api/incomes', incomesRouter);
};
