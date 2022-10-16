require('dotenv').config()

const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const colors = require('colors')

const mongodb = require('./config/mongodb.config')
const schema = require('./config/schema.config')

const port = process.env.PORT || 5000
const app = express()

// Connect to MongoDB
mongodb()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port: ${port}`))
