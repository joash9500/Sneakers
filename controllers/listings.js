const express = require("express");

const db = require('../db/db')

const router = express.Router()

router.get('/api/listings', (req, res) => {
    const sql = "SELECT * FROM listings JOIN sneakers ON listings.sneaker_id = sneakers.id;"
    db.query(sql).then((dbResult) => {

        res.json(dbResult.rows)
    })
})

router.post('/api/listings/', (req, res) => {
    let user_id = req.body.user_id
    let location = req.body.user_location
    let sneaker_id = req.body.sneaker_id
    let listing_date = req.body.listing_date
    let selling_price = req.body.selling_price

    const sql = `INSERT INTO listings (listing_date, location, selling_price, sneaker_id, users_id)
    VALUES ($1, $2, $3, $4, $5)`
    db.query(sql, [listing_date, location, selling_price, sneaker_id, user_id])
    .then(dbRes => {

        res.json({ success: true })
    })
})


module.exports = router