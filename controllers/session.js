const express = require("express");
const db = require('../db/db.js')
const bcrypt = require('bcrypt')

const router = express.Router();

router.post('/', (req, res) => {
    const { email, password } = req.body
    console.log(email, password);

    const sql = "SELECT * FROM users WHERE email = $1"
    let emailList = {}

    db.query(sql, [email])
    .then((dbRes) => {
        res.json({ "message": dbRes.rows})
    })

    .catch((reason) => {
        res.status(500).json({ message: "Unknown error occurred"})
    })

    req.session.userId = user.id
    req.session.name = user.name
    req.session.email = user.email
    console.log("session is running");

})

router.get('/', (req, res) => {
    let name = req.session.name
    let email = req.session.email
    res.json({ name, email })
})

router.delete('/', (req, res) => {
    req.session.destroy
    res.json({ success: true})
})

module.exports = router