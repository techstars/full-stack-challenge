import express from 'express';
import { 
  createFounder, 
  getFoundersByCompanyId 
} from '../apis/founder';

const router = express.Router();

router.get('/:companyId', async (req, res) => {
  try {
    const result = await getFoundersByCompanyId(req.params.companyId);
    res.status(200);
    res.send(result);
  }
  catch(error) {
    res.status(400);
    res.send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await createFounder(req.body);
    res.status(201);
    res.send(result);
  }
  catch(error) {
    res.status(400);
    res.send(error.message);
  }
});

export default router;