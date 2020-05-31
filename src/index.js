
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const app = express()
const port = parseInt(process.env.PORT || 8080)
const router = require('./api/router')

const publicPath = path.join(__dirname, 'client', 'build')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
app.use(cors({ origin: true, credentials: true }))

app.use(router)
app.use(express.static(publicPath))
app.use('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let error = new Error('Not Found')
  error.status = 404
  next(error)
})

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  })
})

app.listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port))

module.exports = app