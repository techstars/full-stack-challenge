import express from 'express';
import {
  getFoundersByCompanyId 
} from '../apis/founder';
import { 
  getCompanyById 
} from '../apis/company';

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const results = await Promise.all([getFoundersByCompanyId(req.params.id), getCompanyById(req.params.id)]);
    const nicerResult = {
      founders: results[0],
      company: results[1] && results[1][0]
    }
    res.status(200);
    res.send(nicerResult);
  }
  catch(error) {
    res.status(400);
    res.send(error.message);
  }
});

export default router;