
const express = require('express')
const router = express.Router()

const deleteCompanyAndFounders = require('./handlers/deleteCompanyAndFounders')
const getCompanies = require('./handlers/getCompanies')
const getCompanyById = require('./handlers/getCompanyById')
const getFoundersByCompanyId = require('./handlers/getFoundersByCompanyId')
const postCompany = require('./handlers/postCompany')
const postFounder = require('./handlers/postFounder')
const putCompany = require('./handlers/putCompany')

router.get('/companies', getCompanies)
router.post('/companies', postCompany)
router.get('/companies/:id', getCompanyById)
router.put('/companies/:id', putCompany)
router.get('/companies/:id/founders', getFoundersByCompanyId)
router.delete('/companies/:id', deleteCompanyAndFounders)

router.post('/founders', postFounder)

module.exports = router