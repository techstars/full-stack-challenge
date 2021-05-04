const { Sequelize } = require('sequelize')

const dbName = process.env.DBNAME || 'companiesChallenge'

const sequelize = new Sequelize(DBNAME,'dderojasAdmin', 'mypassword',{
    host: process.env.ENDPOINT || 'companieschallenge.cygwiqvea0nt.us-west-1.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306,
    ssl: 'Amazon RDS'
})

const models = {
    companies: require(`${__dirname}/models/companies.js`)(sequelize, Sequelize.DataTypes),
    locations: require(`${__dirname}/models/locations.js`)(sequelize, Sequelize.DataTypes),
    founders: require(`${__dirname}/models/founders.js`)(sequelize, Sequelize.DataTypes),
}
models.sequelize = sequelize

sequelize.authenticate()
.then(() => {
    console.log('database connected!')
})
.catch((e) => {
    console.log(e, 'error connecting to database')
})

module.exports = models