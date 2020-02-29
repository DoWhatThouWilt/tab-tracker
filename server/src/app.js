console.log("hello")
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.listen(process.env.PORT || 8081)

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Does this work?`
    })
    console.log(req.body)
})
