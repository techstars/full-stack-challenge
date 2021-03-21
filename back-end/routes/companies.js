const express = require('express');
const router = express.Router();
const CompaniesHelper = require('../helpers/companies');
const { validate, idsSent } = require('../middleware/validation');
const { doesFounderExist }  = require('../middleware/founders');
const { createCompanySchema } = require('../schemas/companies');
const { createFounderSchema } = require('../schemas/founders');

module.exports = router;

/**
 * Retrieves all companies with their informatin
 */
router.get('/', async(req, res, next) => {
  try {
    const results = await CompaniesHelper.getAllCompanies();
    res.status(200).json(results); 
  }catch(error){
    console.log('error: ', error);
    res.status(500).json({message : error, isJoi : false});
  }
});

/**
 * Retrieves A company by id
 */
router.get('/:id', idsSent, async(req, res, next) => {
  try {
    const allData = Object.assign(req.body, req.params);
    const results = await CompaniesHelper.getCompanyBy(allData);
    res.status(200).json(results); 
  }catch(error){
    console.log('error: ', error);
    res.status(500).json({message : error, isJoi : false});
  }
});


/**
 * Creates a company
 */
router.post('/create', validate(createCompanySchema,'body'), async (req, res, next) => {
  try{
    const results = await CompaniesHelper.createCompany(req.body);
    res.status(200).json(results);
  }catch(error){
    console.log('Error: ', error);
    res.status(500).json({message : error, isJoi : false})
  }
});

/**
 * Updates a company with new fields
 */
router.put('/:id', idsSent ,validate(createCompanySchema, 'body'), async (req, res, next) => {
  try {
    const allData = Object.assign(req.body, req.params);
    const results = await CompaniesHelper.updateCompany(allData);
    res.status(200).json(results);
  }catch(error) {
    console.log('Error IN ROUTE : ', error); 
    res.status(500).json({message : error, isJoi : false})
  }
})

/**
 * Updates a founder in a company
 */
router.put('/founder/:company_id', doesFounderExist, idsSent ,validate(createFounderSchema, 'body'), async (req, res, next) => {
  try {
    const allData = Object.assign(req.body, req.params);
    const founder = await CompaniesHelper.updateFounderInCompany(allData);
    const newResults = await CompaniesHelper.getCompanyBy({id: founder[0].company_id});
    res.status(200).json(newResults);
  }catch(error) {
    console.log('Error: ', error); 
    res.status(500).json({message : error, isJoi : false})
  }
})

/**
 * Deletes a company by id
 */
router.delete('/:id', idsSent , async (req, res, next) => {
  try {
    const results = await CompaniesHelper.deleteCompanyBy(req.params);
    res.status(200).json(results);
  }catch(error) {
    console.log('Error: ', error); 
    res.status(500).json({message : error, isJoi : false})
  }
})