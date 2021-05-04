const express = require('express');
// const mysql = require('mysql')
const cors = require('cors')
const db = require('../database')
// const hello = require('../database')
const { companies } = require('../database')
const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// const connection = mysql.createConnection({
//     host: "companies.cygwiqvea0nt.us-west-1.rds.amazonaws.com",
//     user: "dderojasAdmin",
//     password: "challenge",
//     // database: "companies", why no work?!?!?
//     port: 3306
// })
// console.log(connection, 'connenca;skdjfasf')
// connection.connect((err) => {
//     console.log(err.stack, 'errororororo')
// })
// connection.query('CREATE TABLE IF NOT EXISTS sys.Companies (Name VARCHAR(255), Founded VARCHAR(255))', (error, results, fields) => {
//     if (error) console.log('errorrrrrr', error)
//     console.log(results, 'table probably created?')
// })

app.get('/test', (req, res) => {
    console.log('hellooooasdfasdfasdfa', companies)
    companies.findAll()
    .then((val) => {
        res.send(val)
    })
    .catch((e) => {
        console.log(e, 'error back here')
    })
})
        
console.log('here!!!!!!!', db)
db.sequelize.sync().then((req) => {
    console.log(req, 'req!!')
    app.listen(3001, () => {
        console.log('port 3001 server running!!!')
    })
});