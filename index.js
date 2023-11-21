const express = require('express')
const dotenv = require('dotenv')

const api = require('./routes/api.routes')
dotenv.config()

const app = express()

app.use('/api', api)

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`)
})