const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false }))

const connection = mysql.createConnection({
    host: "companies.cygwiqvea0nt.us-west-1.rds.amazonaws.com",
    user: 'dderojasAdmin',
    password: 'challenge',
    databse: 'companies',
})

// connection.connect((error) => {
//     if(error) throw error;
//     console.log('data base connected!!!')
// })

// connection.end()
app.get('/test', (req, res) => {
    console.log('hellooooasdfasdfasdfa')
    connection.query('SELECT * FROM sys.Founders', (error, results, fields) => {
        if (error) console.log(error,'error I think' )
        console.log('dataDawg', results)
        res.json(results)
    })
})
        
        
        
        app.listen(3001, () => {
            console.log('port 3001 good?')
        })