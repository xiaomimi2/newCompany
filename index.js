var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname,'demo')))

app.listen('8001',function () {
	console.log('server is at port 8001')
})