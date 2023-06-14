const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const userController = require('./Controllers/UserRoutes/userRoutes')

app.use(express.json())

app.use(cors())

const PORT = process.env.PORT || 4000

console.log(typeof new Date())

app.use('/users', userController)

app.listen(PORT, () => {
    console.log(`PNAutoBody Server Is Running On Port: ${PORT}`)
})