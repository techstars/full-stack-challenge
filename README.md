# Techstars Engineering: Fun Front to Back

### App live at <https://cryptic-plains-53007.herokuapp.com>

## Architecture

### Frontend (/client)

Commands to run:

1. `yarn install` OR `npm install`
2. `yarn start` OR `npm start`

The front-end uses a React app with hooks and simple re-usable components which can be extended further to go with the development of features.

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

### Test

Both the frontend and backend have a test suite built using Jest.

Run Tests Using : `yarn test` OR `npm test`

