const express = require('express');
const router = express.Router();
const companiesController = require('../controllers/companies');
const mw = require('../util/middleware');

router.get('/', async (req, res, next) => {
  const result = await companiesController.getAllCompanies();
  if (result && result.error) {
    mw.sendError(res);
  } else {
    res.send(result);
  }
});

router.get('/:id', mw.checkIfExists('companies'), async (req, res, next) => {
  const result = await companiesController.getOneCompany(req.params.id);
  if (result && result.error) {
    mw.sendError(res);
  } else {
    res.send(result);
  }
});

const companyReqs = ['name', 'city', 'state', 'description']

router.post('/', mw.validateRequiredValues(companyReqs), async (req, res, next) => {
  const result = await companiesController.postCompany(req.body);
  if (result && result.error) {
    mw.sendError(res);
  } else {
    res.send(result);
  }
});

module.exports = router;
