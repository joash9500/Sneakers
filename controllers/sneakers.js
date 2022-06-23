const express = require("express");

const db = require('../db/db')

const router = express.Router()

router.get('/api/sneakers', (req, res) => {
    const sql = "SELECT * FROM sneakers;"
    db.query(sql).then((dbResult) => {
        res.json(dbResult.rows)

    })
})

router.get('/api/sneakers/:id', (req, res) => { //get sneakers for user with id
    let users_id = req.params.id
    const sql = "SELECT * FROM sneakers WHERE users_id = $1"
    db.query(sql, [users_id]).then((dbResult) => {
        res.json(dbResult.rows)
    })
})

router.post('/api/sneakers', (req, res) => {
    let name = req.body.name;
    let description = req.body.description;
    let brand = req.body.brand
    let purchase_place = req.body.purchase_place;
    let size = req.body.size;
    let type = req.body.type;
    let image_path = req.body.image_path;
    let condition = req.body.condition;
    let users_id = req.body.user_id

    
    if (!name) {
        res.status(400).json({ message: 'name is required' })
        return
    } else if (!description) {
        res.status(400).json({ message: 'description is required' })
        return 
    } else if (description.length > 255) {
        res.status(400).json({ message: 'description is too long' })
        return 
    }
    const sql = `
    INSERT INTO sneakers (name, description, brand, purchase_place, size, type, image_path, condition, users_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`
    db.query(sql, [name, description, brand, purchase_place, size, type, image_path, condition, users_id])
        .then(dbRes => {
            console.log(dbRes)
            res.json({ success: true })
        })
})

module.exports = router