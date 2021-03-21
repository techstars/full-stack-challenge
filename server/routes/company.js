import express from 'express';
import { 
  createCompany, 
  getCompanyById, 
  getAllCompanies, 
  updateCompanyById 
} from '../apis/company';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const result = await createCompany(req.body);
    res.status(200);
    res.send(result);
  }
  catch(error) {
    res.status(400);
    res.send(error.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await getCompanyById(req.params.id);
    res.status(200);
    res.send(result);
  }
  catch(error) {
    res.status(400);
    res.send(error.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await getAllCompanies();
    res.status(200);
    res.send(result);
  }
  catch(error) {
    res.status(400);
    res.send(error.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const result = await updateCompanyById(req.params.id, req.body);
    res.status(200);
    res.send(result);
  }
  catch(error) {
    res.status(400);
    res.send(error.message);
  }
});

export default router;