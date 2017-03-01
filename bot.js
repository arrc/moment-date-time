const request = require('request')

let _host = 'http://192.168.1.230:3000/'

request.get(_host)
request.post(_host + 'new').form({ name: "Naveen" , fullName: 'naveen kumar'})
console.log(_host + 'new')
