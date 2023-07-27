const express = require('express');
require("dotenv").config()
const colors = require("colors")
const connectDB = require("./config/db")

var { graphqlHTTP } = require("express-graphql")
const port = process.env.PORT || 5000
const schema = require("./schema/schema.js")

const app = express()

//connect to d
connectDB()

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV = "development"
}))

app.listen((port),()=>{
    console.log(`Server is running at port ${port}`);
})