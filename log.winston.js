const winston = require('winston');
const path = require('path');

// console.log(__filename.split(/[\\/]/).pop());

var winstonLogger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({ level: 'debug' }),
        new winston.transports.DailyRotateFile({
          filename: './logs/log',
          datePattern: 'yyyy-MM-dd.',
          prepend: true,
          level: process.env.ENV === 'development' ? 'debug' : 'info'
        })
    ]
});
module.exports = winstonLogger;
