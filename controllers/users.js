const express = require("express");
const db = require('../db/db')
const router = express.Router()
const bcrypt = require('bcrypt')

function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}

router.get('/api/users', (req, res) => {
    const sql = 'SELECT * FROM users' //psql query to get data
    db.query(sql).then((dbResult) => { //run the sql query using the db connection you created earlier in #3 and set up a promise

        res.json(dbResult.rows) //note you can only return one response in a app.get!!! you can't have two res.json()
    }) 
})

router.post('/api/users', (req, res) => {

    //get JSON request from req.body when signup form is submitted
    let email = req.body.email
    let password_hash = generateHash(req.body.pass)
    let name = req.body.name
    let username = req.body.username
    let ideal_size = req.body.size
    let location = req.body.loc
    let photo_path = req.body.photo
    let instagram = req.body.insta

    const sql = 'INSERT INTO users (name, email, password_hash, username, photo_path, location, ideal_size, instagram) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)' 

    if (!name || !email || !username || !photo_path || !location || !ideal_size || !instagram || !password_hash) { //catch user input error
        res.status(400).json({message: 'incomplete fields. could not create new user'})
    } else {
        db.query(sql, [name, email, password_hash, username, photo_path, location, ideal_size, instagram])
        .then((result) => {
            res.json({ "response": "success"})
        }).catch( error => {
            res.status(500).json({'message': "unknown error occured when inserting new user"}) //catch server errors
        })
    }

})

//delete users via user_id
router.delete('/api/users/:id', (req, res) => {
    let user_id = req.params.id
    const sql = 'DELETE FROM users WHERE id = $1'
    db.query(sql, [user_id]).then((dbResult) => {
        res.json({"response" : "success"})
    })
})

router.put('/api/users/:id', (req, res) => {
    let name = req.body.name //$1
    let email = req.body.email //$2
    let username = req.body.username //$3
    let photo_path = req.body.photo //$4
    let location = req.body.loc //$5
    let ideal_size = req.body.size //$6
    let instagram = req.body.insta //$7

    let user_id = req.params.id //$8

    const sql = 'UPDATE users SET name = $1, email = $2, username = $3, photo_path = $4, location = $5, ideal_size = $6, instagram = $7 WHERE id = $8'
    
    if (!name || !email || !username || !photo_path || !location || !ideal_size || !instagram) { //catch user input error
        res.status(400).json({message: 'missing some input fields in the form'})
    } else {    
        db.query(sql, [name, email, username, photo_path, location, ideal_size, instagram, user_id]).then((result) => { //catch server error
            res.json({message: "success"})
        }).catch((error) => {
            res.status(500).json({message: 'error occured when attempting to update user in psql database'})
        })
    }
    
})

module.exports = router
