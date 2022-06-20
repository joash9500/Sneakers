console.log('login page is rendering')
const express = require('express')
const router = express.Router()
const db = require('../db/db')
const bcrypt = require('bcrypt')

function renderLogin() {

    const htmlContent = document.getElementById('content')
    const form = document.createElement('form')
    form.innerHTML = `
        <label for="email">Email: </label>
        <input type="email" name="email"><br>
        <label for="password">Password: </label>
        <input type="password" name="password"><br>

        <button type="submit">Log In</button>
    `

    htmlContent.replaceChildren(form)

    form.addEventListener('submit', (event) => {
        event.preventDefault() //prevents default pasting into URL when form is submitted

        const formData = new FormData(form) //copy data from form into formData
        let email = formData.get('email')
        let password = formData.get('password')

        }).then(() => {
            window.location ='/' //redirect
        }).catch((err) => {
            console.log(err.response.data.message)
        })

}

function isValidPassword(plainTextPassword, passwordHash) {
    // Returns true or false
    return bcrypt.compareSync(plainTextPassword, passwordHash)
}
router.post('/', (req,res) => {
    const {email, password} = req.body //get the email and password the request
    const sql = "SELECT * FROM users WHERE email = $1"
    db.query(sql, [email]).then((dbResult) => {
        let results = dbResult.rows[0]
        //check the email and password
            //if the email/password are correct, set the session
            //otherwise return an error
        if (results == undefined) {
            res.status(400).json({ message : "user does not exist in our database" })
        } else if (email == results.email) {
            //if email exists, check the password below
            let password_check = isValidPassword(password, results.password_hash)
            if (password_check) {
                //if password_check is true. set session and log user in
                req.session.userId = results.id
                req.session.name = results.name
                req.session.email = results.email
                res.json({session : req.session}) //set the session
            } else {
                res.status(400).json({ message: "password is incorrect"})
            }
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: 'unknown error has occured'})
    })
})