
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/techstars'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/techstars-test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
