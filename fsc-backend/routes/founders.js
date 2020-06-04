const express = require('express');
const router = express.Router();
const foundersController = require('../controllers/founders');
const mw = require('../util/middleware');

router.get('/', async (req, res, next) => {
  const result = await foundersController.getAllFounders();
  if (result && result.error) {
    mw.sendError(res);
  } else {
    res.send(result);
  }
});

router.get('/:id', mw.checkIfExists('founders'), async (req, res, next) => {
  const result = await foundersController.getOneFounder(req.params.id);
  if (result && result.error) {
    mw.sendError(res);
  } else {
    res.send(result);
  }
});

const founderReqs = ['firstName', 'lastName', 'title', 'companyId'];

router.post('/', mw.validateRequiredValues(founderReqs), async(req, res, next) => {
  const result = await foundersController.postFounder(req.body);
  if (result && result.error) {
    mw.sendError(res);
  } else {
    res.send(result);
  }
});

router.patch('/:id', mw.checkIfExists('founders'), async (req, res, next) => {
  const result = await foundersController.patchFounder(req.body, req.params.id);
  if (result && result.error) {
    mw.sendError(res);
  } else {
    res.send(result);
  }
});

router.delete('/:id', mw.checkIfExists('founders'), async (req, res, next) => {
  const result = await foundersController.deleteFounder(req.params.id);
  if (result && result.error) {
    mw.sendError(res);
  } else {
    res.send(result);
  }
})

module.exports = router;
