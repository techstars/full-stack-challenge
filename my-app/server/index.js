const express = require('express');
const cors = require('cors')
const db = require('../database')
const { companies, locations, founders } = require('../database')
const app = express();

app.use(express.json())
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
    console.log('inget!!!!!', companies)
    companies.findAll()
    .then((val) => {
        res.send(val)
    })
    .catch((e) => {
        console.log(e, 'error back here')
    })
})

app.post('/postTest', async (req, res) => {
    console.log('in put!!!!', req.body)
     const locationResult = await locations.create({
             City: req.body.city,
             State: req.body.state,
             createdAt: new Date(),
             updatedAt: new Date()
    })

    const companiesResult = await companies.create({
        Name: req.body.company,
        Location: locationResult.dataValues.id,
        Founded: req.body.founded,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    console.log(companiesResult, 'companiesResfasdfadsfas')
    res.send(companiesResult.dataValues)
    // await founders.create({
    //     name: req.body.city,
    //     title: locationResult.dataValues.id,
    //     company: req.body.founded,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    // })
})

db.sequelize.sync().then((req) => {
    app.listen(3001, () => {
        console.log('port 3001 server running!!!')
    })
});