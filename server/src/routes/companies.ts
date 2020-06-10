import express from 'express'

import * as companiesService from '../services/companiesService'

const router = express.Router()

router.get('/', async (req, res) => {
  const result = await companiesService.getAllCompanies()

  res.json(result)
})

router.get(`/:id`, async (req, res) => {
  const result = await companiesService.getCompanyById(req.params.id)

  res.json(result)
})

router.put(`/:id`, async (req, res) => {
  const result = await companiesService.updateCompany(req.body, req.params.id)

  res.json(result)
})

router.post(`/`, async (req, res) => {
  const result = await companiesService.addCompany(req.body)

  res.json(result)
})

router.post(`/:id/add-founder`, async (req, res) => {
  const result = await companiesService.addFounderToCompany(req.body, req.params.id)

  res.json(result)
})

router.delete('/:id', async (req, res) => {
  const result = await companiesService.deleteCompany(req.params.id)

  res.json(result)
})

export default router
