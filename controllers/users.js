const express = require("express");
const db = require('../db/db')
const router = express.Router()

router.get('/api/users', (req, res) => {
    const sql = 'SELECT * FROM users' //psql query to get data
    db.query(sql).then((dbResult) => { //run the sql query using the db connection you created earlier in #3 and set up a promise

        res.json(dbResult.rows) //note you can only return one response in a app.get!!! you can't have two res.json()
    }) 
})

module.exports = router