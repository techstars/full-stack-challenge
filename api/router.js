
const express = require('express')
const router = express.Router()

router.get('/companies', (_, res) => {
  res.json({
    message: 'the get companies endpoint'
  })
})

router.post('/companies', (_, res) => {
  res.json({
    message: 'the create company endpoint'
  })
})

router.get('/companies/:id', (_, res) => {
  res.json({
    message: 'the get company and founders by id endpoint'
  })
})

router.put('/companies/:id', (_, res) => {
  res.json({
    message: 'update company by id endpoint'
  })
})

router.delete('/companies/:id', (_, res) => {
  res.json({
    message: 'delete company by id enpoint'
  })
})

router.post('/founders', (_, res) => {
  res.json({
    message: 'create founder endpoint'
  })
})

module.exports = router