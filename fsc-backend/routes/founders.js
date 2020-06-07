const express = require('express');
const router = express.Router();
const foundersController = require('../controllers/founders');
const mw = require('../util/middleware');

// Get all founders
router.get('/', async (req, res, next) => {
  const result = await foundersController.getAllFounders();
  mw.handleResponse(res, result);
});

// Get one founder
router.get('/:id', mw.checkIfExists('founders'), async (req, res, next) => {
  const result = await foundersController.getOneFounder(req.params.id);
  mw.handleResponse(res, result);
});

// Define required values for founder
const founderReqs = ['firstName', 'lastName', 'title', 'companyId'];

// Create a new founder
router.post('/', mw.validateRequiredValues(founderReqs), async(req, res, next) => {
  const result = await foundersController.postFounder(req.body);
  mw.handleResponse(res, result);
});

// Edit a founder
router.patch('/:id', mw.checkIfExists('founders'), async (req, res, next) => {
  const result = await foundersController.patchFounder(req.body, req.params.id);
  mw.handleResponse(res, result);
});

// Delete a founder
router.delete('/:id', mw.checkIfExists('founders'), async (req, res, next) => {
  const result = await foundersController.deleteFounder(req.params.id);
  mw.handleResponse(res, result);
})

module.exports = router;
