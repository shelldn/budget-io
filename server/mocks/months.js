/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var monthsRouter = express.Router();

  monthsRouter.get('/', function(req, res) {
    res.send({
      data: [
        { type: 'months', id: 1 },
        { type: 'months', id: 2 },
        { type: 'months', id: 3 },
        { type: 'months', id: 4 },
        { type: 'months', id: 5 },
        { type: 'months', id: 6 },
        { type: 'months', id: 7 },
        { type: 'months', id: 8 },
        { type: 'months', id: 9 },
        { type: 'months', id: 10 },
        { type: 'months', id: 11 },
        { type: 'months', id: 12 }
      ]
    });
  });

  monthsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  monthsRouter.get('/:id', function(req, res) {
    res.send({
      'months': {
        id: req.params.id
      }
    });
  });

  monthsRouter.put('/:id', function(req, res) {
    res.send({
      'months': {
        id: req.params.id
      }
    });
  });

  monthsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/months', require('body-parser'));
  app.use('/api/months', monthsRouter);
};
