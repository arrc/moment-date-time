'use strict';
const winston = require('winston')
const expressWinston = require('express-winston')

module.exports = function(app) {
  app.use(expressWinston.logger({
      transports: [
        // new winston.transports.Console({
        //   json: true,
        //   colorize: true
        // }),
        new winston.transports.DailyRotateFile({
          filename: './logs/log',
          datePattern: 'yyyy-MM-dd.',
          prepend: true,
          level: process.env.ENV === 'development' ? 'debug' : 'info'
        })
      ],
      meta: true,
      msg: "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}",
      dumpException: true,
      showStack: true,
      dynamicMeta: function(req, res) {
        return {
          user: req.user ? req.user : null,
          role: req.user ? req.user : null,
        }
      }
    })
  );
}
