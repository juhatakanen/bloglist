const express = require('express')
const app = express()

const config = require('./utils/config')
const logger = require('./utils/logger')
logger.info('connecting to', config.MONGODB_URI)

const mongoose = require('mongoose')
mongoose.connect(config.MONGODB_URI)
.then(() => {
    logger.info('connected to MongoDB')
})
.catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
})

const cors = require('cors')
app.use(cors())
app.use(express.json())

const blogsRouter = require('./controllers/blogs')
app.use('/api/blogs', blogsRouter)

module.exports = app