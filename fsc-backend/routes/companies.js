const express = require('express');
const router = express.Router();
const companiesController = require('../controllers/companies');
const mw = require('../util/middleware');

// Get all companies
router.get('/', async (req, res, next) => {
  const result = await companiesController.getAllCompanies();
  if (result && result.error) {
    mw.sendError(res);
  } else {
    res.send(result);
  }
});

// Get one company
router.get('/:id', mw.checkIfExists('companies'), async (req, res, next) => {
  const result = await companiesController.getOneCompany(req.params.id);
  if (result && result.error) {
    mw.sendError(res);
  } else {
    res.send(result);
  }
});

// Define required values for middleware
const companyReqs = ['name', 'city', 'state', 'description']

// Post new company
router.post('/', mw.validateRequiredValues(companyReqs), async (req, res, next) => {
  const result = await companiesController.postCompany(req.body);
  if (result && result.error) {
    mw.sendError(res);
  } else {
    res.send(result);
  }
});

// Edit a company
router.patch('/:id', mw.checkIfExists('companies'), async (req, res, next) => {
  const result = await companiesController.patchCompany(req.body, req.params.id);
  if (result && result.error) {
    mw.sendError(res);
  } else {
    res.send(result);
  }
});

// Delete a company
router.delete('/:id', mw.checkIfExists('companies'), async (req, res, next) => {
  const result = await companiesController.deleteCompany(req.params.id);
  if (result && result.error) {
    mw.sendError(res);
  } else {
    res.send(result);
  }
})

module.exports = router;
