
const express = require('express')
const router = express.Router()

const deleteCompanyAndFounders = require('./handlers/deleteCompanyAndFounders')
const getCompanies = require('./handlers/getCompanies')
const getCompanyAndFoundersById = require('./handlers/getCompanyAndFoundersById')
const postCompany = require('./handlers/postCompany')
const postFounder = require('./handlers/postFounder')
const putCompany = require('./handlers/putCompany')

router.get('/companies', getCompanies)
router.post('/companies', postCompany)
router.get('/companies/:id', getCompanyAndFoundersById)
router.put('/companies/:id', putCompany)
router.delete('/companies/:id', deleteCompanyAndFounders)

router.post('/founders', postFounder)

module.exports = router