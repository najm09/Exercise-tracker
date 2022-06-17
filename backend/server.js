const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const ServerApiVersion = require('mongodb');
require('dotenv').config()

const app = express()
const port = process.env.PORT

// Middlewares
app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }
  );
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  })

// const client = new MongoClient(uri, );
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const exercisesRouter = require('./Routes/exercises')
const usersRouter = require('./Routes/users')

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

app.listen( port, () => {
  console.log(`server is running on port : ${port}`)
})