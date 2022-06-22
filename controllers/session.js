const express = require("express");
const db = require('../db/db.js')
const bcrypt = require('bcrypt')
const router = express.Router();

function isValidPassword(plainTextPassword, password_hash) {
    
    return bcrypt.compareSync(plainTextPassword, password_hash) //return true or false
}

router.post('/api/session', (req, res) => {
    const { email, password } = req.body

    const sql = "SELECT * FROM users WHERE email = $1"

    db.query(sql, [email])
    .then((dbRes) => {
        let result = dbRes.rows[0]

        //check email
            //if email correct, check password
            //set session if password is ok otherwise return error
        if (result == undefined) {
            res.status(400).json({message: 'password is incorrect'})
        } else if (result.email == email) {
            let password_check = isValidPassword(password, result.password_hash)
            if (password_check) {
                //set session with user's id, name and email
                req.session.user_id = result.id
                req.session.name = result.name
                req.session.email = result.email

                res.json({session: req.session})
            } else  {
                res.status(400).json({message: 'password is incorrect'})
            }
        }
    })
    .catch((reason) => {
        console.log(reason)
        res.status(500).json({ message: "Unknown error occurred"})
    })

})

router.get('/api/session', (req, res) => {
    let name = req.session.name
    let email = req.session.email
    let id = req.session.user_id
    res.json({ id, name, email })
})

//delete session for log out
router.delete('/api/session', (req, res) => {
    req.session.destroy()
    res.json({ success: true})
})

module.exports = router