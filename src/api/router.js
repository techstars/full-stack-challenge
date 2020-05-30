
const express = require('express')
const router = express.Router()

const getCompanies = require('./handlers/getCompanies')
const getCompanyAndFoundersById = require('./handlers/getCompanyAndFoundersById')
const postCompany = require('./handlers/postCompany')
const putCompany = require('./handlers/putCompany')

router.get('/companies', getCompanies)
router.post('/companies', postCompany)
router.get('/companies/:id', getCompanyAndFoundersById)
router.put('/companies/:id', putCompany)

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