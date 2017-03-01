const express    = require('express')
const app        = express()
const moment     = require('moment')
const winston = require('winston')
const expressWinston = require('express-winston')
const path = require('path')
require('winston-daily-rotate-file');

require('./express.winston')(app);

require(path.resolve('config/app.config'))(app)

app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}));

//
log = require('./log.winston')
app.get('/', function(req, res){
  req.user = "Naveen"
  log.info('Root path', {headers: req.headers, user: req.user})
  // throw new Error("fsadfs fsafsafa")
  res.status(200).json({msg: "Hi"})
})

app.post('/new', function(req, res){
  log.info(req.body);
  res.status(200).json({body: req.body, msg: "success!"})
})

app.post('/date', function(req, res){
  res.status(200).json({ body: 'body', msg: 'success!' })
})

app.listen(3000, function(){
  console.log("Running on port 3000");
})
