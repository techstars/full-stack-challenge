# Techstars Engineering: Fun Front to Back

### App live at <https://cryptic-plains-53007.herokuapp.com>

## Architecture

### Frontend (/client)

Commands to run:

1. `yarn install` OR `npm install`
2. `yarn start` OR `npm start`

The front-end uses a React app bootstrapped with create-react-app, is uses hooks and simple re-usable components with plain CSS and no libraries except for the official React-Modal for showing modals.

### Backend (/server)

Commands to run:

1. `yarn install` OR `npm install`
2. `yarn start` OR `npm start`

Backend is built on NodeJS with Express, and Postgres as the database.

The Postgres schema consists of TWO tables - Companies, Founders

COMPANIES has the name, city, state, description as the attributes and a PRIMARY KEY id which is an INTEGER.

FOUNDERS has name, title, company as the attributes and a PRIMARY KEY id which is an INTEGER.

One Founder can be linked to only one company by storing the company id in the attribute "company" of the FOUNDERS table.

Many Founders can be linked to one company.

#### API Endpoints

COMPANY

`GET : /company` - Gets all companies.
`GET : /company/:id` - Gets company by id.
`POST : /company` - Creates a new company.
`PUT : /company/:id` - Updates a company by id.
`DELETE : /company/:id` - Deletes a company by id.

FOUNDERS

`GET : /founder/:companyId` - Gets founders by Company Id.
`POST : /founder` - Creates a new founder for a company.

COMMON

`GET : /common/:companyId` - Gets company and founders by Company Id

### Test

Both the frontend and backend have a test suite built using Jest.

Run Tests Using : `yarn test` OR `npm test`

