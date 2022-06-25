## PROJECT: SoleMates
Try this application [now](https://blooming-island-26579.herokuapp.com/#)

### Description
A place to share your sneaker collection or sell it. 

### Technologies used 
 - express (and session): Express used to run servers on javascript. And express-sessions to create, store and destroy cookies for users when they log in/log out.
 - node.js: why use it? there's a good [reason](https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js)
 - sql (for database): to manage the database for sneakers, users and listings. frequently used to get, update and create new data for users and sneakers
 - bootstrap: used to improve the layout of the page with classes
#### Languages
 - javascript: used to build single page apps like SoleMates. updates and renders pages quickly between client and server.
 - css: marginally use to support the bootstrap layout
 - html: structures the app and how everything fits together

### Installation
Dependencies to install to run this app will be contained in the package.json
Ensure that all dependencies installed on local drive include the following:
1. bcrypt
2. bootstrap (this is alreay put in as a link in the index.html)
3. connect-pg-simple
4. dotenv
5. express
6. express-session
7. pg

Also check that the following is included in the "scripts" in the package.json

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  }
```

### Running the app from the terminal
1. npm start
2. click the link in the terminal (example below) and the app will render
```
http://localhost:3000
```




