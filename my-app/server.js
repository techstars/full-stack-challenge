const express = require('express');
const path = require('path')
const cors = require('cors')
const db = require('./database')
const { companies, locations, founders } = require('./database')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')));


app.get('/test', (req, res) => {
    companies.findAll()
    .then((val) => {
        res.send(val)
    })
    .catch((e) => {
        console.log(e, 'error in get endpoint')
    })
})

app.post('/postTest', async (req, res, next) => {
    try {
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

       res.send(companiesResult.dataValues)
       // await founders.create({
       //     name: req.body.city,
       //     title: locationResult.dataValues.id,
       //     company: req.body.founded,
       //     createdAt: new Date(),
       //     updatedAt: new Date()
       // })
    } catch(e) {
        console.log(e, 'error in post endpoint')
        next(e)
    }
})

db.sequelize.sync().then((req) => {
    const port = process.env.PORT || 3001
    console.log(`env port: ${port}`)
    app.listen(port, () => {
        console.log(`server running on port:${port}`)
    })
});