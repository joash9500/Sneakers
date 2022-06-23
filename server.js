const express = require("express");
require('dotenv').config()

const expressSession = require('express-session')
const pgSession = require('connect-pg-simple')(expressSession);

const app = express();
// const port = 3000;
const port = process.env.PORT || 3000;

const db = require('./db/db')

const sneakersRouter = require('./controllers/sneakers')
const usersRouter = require('./controllers/users')
const sessionRouter = require('./controllers/session')
const listingsRouter =  require('./controllers/listings')

// app.use(expressSession({
//   store: new pgSession({
//       pool: db,
//       createTableIfMissing: true,
//   }),
//   secret: process.env.EXPRESS_SESSION_SECRET_KEY,    
// }))

let db;
if (process.env.NODE_ENV === 'production') {
  db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
} else {
  db = new pg.Pool({
    database: 'sneakers',
    // password: 'optional_password' // If you have a password on your local db
  })
}

app.use(express.static('client'))
app.use(express.json())

// Logging Middleware
app.use((req, res, next) => {
  console.log(`I am middleware! Request ${req.path}`)
  next()
})

app.use('/', usersRouter)

app.use('/', sessionRouter)

app.use('/', sneakersRouter)

app.use('/', listingsRouter)

app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Some error occured!!' })
  next(err)
})

// start the web server
app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
})