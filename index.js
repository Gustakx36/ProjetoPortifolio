var express = require('express')
var app = express()
var path = require('path')

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
    res.render('../static/index')
})

app.listen(3333)