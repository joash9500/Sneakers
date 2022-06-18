const express = require("express");

const db = require('../db/db')

const router = express.Router()

router.get('/api/listings', (req, res) => {
    const sql = "SELECT * FROM listings JOIN sneakers ON listings.sneaker_id = sneakers.id;"
    db.query(sql).then((dbResult) => {

        res.json(dbResult.rows)

    })
})

module.exports = router