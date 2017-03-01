const request = require('request')

request.get('http://localhost:3000/')
request.post('http://localhost:3000/new').form({ name: "Naveen" })
