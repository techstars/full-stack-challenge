The app is live at https://elegant-lumiere-4fb56b.netlify.app/#/

# To run locally

## Backend
`cd fsc-backend`

`npm install`

`npm start`

### Set up database

This app uses postgresql, you will need a database named `companydb` and one named `companydb_test`.

Run migrations:
`knex migrate:latest`

Run seeds: `knex seed:run`

## Frontend

`cd fsc-frontend`

`yarn install`

`yarn start`

The backend is written in Node.js, with an Express server tool.
The frontend is written in React, with Redux for state management and Bootstrap as a CSS framework.
To access the backend deployment manually, use https://polar-taiga-39969.herokuapp.com
