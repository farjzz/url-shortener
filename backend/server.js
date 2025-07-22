require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const UrlRoutes = require("./routes/url")

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to db and listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

app.use(express.json())
app.use("/shorturl", UrlRoutes)

