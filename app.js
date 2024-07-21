const prompt = require('prompt-sync')();
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const CRM = require('./CRM')

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to MongoDB")
    await runQueries()
    await mongoose.disconnect()
    console.log("Disconnected from MongoDB")
    process.exit()
  }
  
  const runQueries = async () => {
    console.log("Queries running.")
    ///
      await app() ;
  }
  
  connect()
  /*-------------------------------- Query Functions --------------------------------*/