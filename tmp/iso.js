'use strict';
const m = require("moment")

const DATE = "27/02/2017"
const TIME = "5:00:pm"

// let dateIso = m(DATE, "DD/MM/YYYY").toISOString()
// let dateUtc = m.utc(DATE, "DD/MM/YYYY").toISOString()
// console.log({dateIso, dateUtc});

// let isoTime = m(TIME, "hh:mm:a").toISOString()
// console.log("ISO time: \t", isoTime);
// console.log("Local time: \t", m(isoTime).format());


let startTime = m(TIME, "hh:mm:a").toISOString();
console.log(startTime);
console.log(new Date());
