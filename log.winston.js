const winston = require('winston');
const path = require('path');

var winstonLogger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({ json: false, colorize: true }),
        new winston.transports.DailyRotateFile({
          filename: './logs/log',
          datePattern: 'yyyy-MM-dd.',
          prepend: true
        })
    ]
});
module.exports = winstonLogger;
