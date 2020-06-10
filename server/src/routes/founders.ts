import express from 'express'

import * as foundersService from '../services/foundersService'

const router = express.Router()

router.get('/', async (req, res) => {
  const result = await foundersService.getAllFounders()

  res.json(result)
})

router.get(`/:id`, async (req, res) => {
  const result = await foundersService.getFounderById(req.params.id)

  res.json(result)
})

router.post('/', async (req, res) => {
  const result = await foundersService.addFounder(req.body)
  
  res.json(result)
})

router.put('/:id', async (req, res) => {
  const result = await foundersService.updateFounder(req.body, req.params.id)

  res.json(result)
})

router.delete('/:id', async (req, res) => {
  const result = await foundersService.deleteFounder(req.params.id)

  res.json(result)
})

export default router
