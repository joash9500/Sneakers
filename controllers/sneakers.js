const express = require("express");

const db = require('../db/db')

const router = express.Router()

router.get('/api/sneakers', (req, res) => {
    const sql = "SELECT * FROM sneakers"
    db.query(sql).then((dbResult) => {

        res.json(dbResult.rows)

    })
})

module.exports = router