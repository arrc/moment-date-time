const m = require('moment')

const delDate = 1488133800
const laDate = 1488182400

const delTime = 1488181500
const laTime = 1488230100

console.log("Delhi time (ISO): \t", m(delTime).toISOString());
console.log("LA time (ISO): \t", m(laTime).toISOString());

// console.log("Delhi date (ISO): \t", m(delDate, 'X').toISOString());
// console.log("LA date (ISO): \t", m(laDate, 'X').toISOString());

// var expires = moment(date).valueOf();
//  var expires = moment.utc(date).valueOf();
