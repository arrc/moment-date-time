const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//
require('./winston.logger')(app);
app.set('showStackError', true);
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.enable('jsonp callback');
app.use(bodyParser.urlencoded({extended:'true'}));

//
app.get('/', function(req, res){
  res.status(200).json({msg: "Hi"})
})

app.post('/new', function(req, res){
  console.log(req.body);
  res.status(200).json({body: req.body, msg: "success"})
})

app.listen(3000, function(){
  console.log("Running on port 3000");
})
