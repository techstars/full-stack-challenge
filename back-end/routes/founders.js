const express = require('express');
const router = express.Router();
const FoundersHelper = require('../helpers/founders');
const { validate, idsSent } = require('../middleware/validation');
const { 
  createFounderSchema
} = require('../schemas/founders');

module.exports = router;

// router.post('/', validate(createFounderSchema, 'body'), async(req, res, next) => {
//     try {
//         const results = await FoundersHelper.createFounder(req.body);
//         res.status(200).json(results);
//     }catch(error){
//         console.log('Error: ', error);
//         return Promise.reject(error);
//     }
// });
