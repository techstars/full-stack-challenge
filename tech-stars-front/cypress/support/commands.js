import axios from 'axios'

Cypress.Commands.add('deleteAndSeedDatabase', async () => {
  return await axios.post('http://localhost:3000/test/delete_database', {
    seed: true,
  })
})

Cypress.Commands.add('deleteDatabase', async () => {
  return await axios.post('http://localhost:3000/test/delete_database', {
    seed: false,
  })
})
