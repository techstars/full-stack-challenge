const { Sequelize } = require('sequelize')

const dbName = process.env.DBNAME || ''

const sequelize = new Sequelize(dbName,'dderojasAdmin', 'mypassword',{
    host: process.env.ENDPOINT || '',
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