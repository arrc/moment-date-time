'use strict';
const winston = require('winston')
const expressWinston = require('express-winston')

module.exports = function(app) {
  app.use(expressWinston.logger({
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        })
      ],
      meta: true,
      msg: "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}",
      colorize: true,
      dumpException: true,
      showStack: true,
      requestWhitelist: ["url", "query", "headers", "method", "body"]
    })
  );
}
