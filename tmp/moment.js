const moment = require('moment')

const DATE = "27/02/2017"
const TIME = "13:15"
let momentNow = moment.now()
let currentDateTime = moment()
let utcCurrentDateTime = moment().utc()

function printCurrentDateTime(){
  console.log("====== \t Current Date Time \t======");
  console.log({momentNow, currentDateTime, utcCurrentDateTime});
}
printCurrentDateTime()

console.log(moment("13:15", "HH:mm").unix());
// ==================== EPOCH Time ============================
let epochDate = moment(DATE, "DD/MM/YYYY").unix()
let epochTime = moment(TIME, "HH:mm").unix()
let epochDateTime = moment("27/02/2017", "DD/MM/YYYY").unix()
let epochTimeInUtc = moment(epochTime).local().format("L LT")

function printEpochDateTime(){
  console.log("====== \tEpoch Time \t======");
  console.log({epochDate, epochTime, epochDateTime, epochTimeInUtc});
}
printEpochDateTime()

// ==================== ISO dates =============================
let isoStartDate = moment('21/11/2016', "DD/MM/YYYY").toISOString();
