// const {Person} = require("./person")
const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect')

dotenv.config()

connectToDatabase()
require('./modules/express')


//require("./modules/path")
// require("./fs")
// require('./modules/http')
// const person = new Person('Marcus')


