const express = require("express");

const db = require('../db/db')

const router = express.Router()

router.get('/api/listings', (req, res) => {
    const sql = "SELECT * FROM listings JOIN sneakers ON listings.sneaker_id = sneakers.id;"
    db.query(sql).then((dbResult) => {

        res.json(dbResult.rows)

    })
})

router.post('/api/listings', (req, res) => {
    let listing_date = req.body.listing_date;
    let location = req.body.location;
    let selling_price = req.body.selling_price
    const sql = `INSERT INTO listings (listing_date, location, selling_price)
    VALUES ($1, $2, $3)`
    db.query(sql, [listing_date, location, selling_price])

    .then(dbRes => {

        res.json({ success: true })
    })
})


module.exports = router