'use strict';
const path = require('path');
const bodyParser = require('body-parser')

module.exports = function(app){
  app.set('showStackError', true);
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
  app.enable('jsonp callback');
  app.use(bodyParser.urlencoded({extended:'true'}));
}
