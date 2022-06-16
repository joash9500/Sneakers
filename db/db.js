const pg = require('pg'); 

const db = new pg.Pool({
    database: 'sneakers'
})

module.exports = db