const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())

const logger = require("./logger")

const { fruitsRouter } = require("./routes/fruits")

app.use(cors())
app.use(logger)
app.use("/fruits", fruitsRouter)

module.exports = {
    app
}

