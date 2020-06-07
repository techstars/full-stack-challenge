module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/companydb'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/companydb_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
