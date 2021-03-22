# full-stack-challenge

React 17\
Node 14\
PostgresSQL 13

## Top level directory layout

```bash
full-stack-challenge
├── back-end
│   ├── bin
│   │   ├── www
│   ├── db                                        #Holds all database related files
│   │   ├── sql                                   #Holds SQL related files
│   │   │    ├── init.sql                         #Script to run in order to create database tables
│   │   │    ├── seed.sql                         #Script to run to seed database tables
│   │   ├── connect.js                            #Holds connection to database
│   ├── helpers                                   #Helper functions for each module
│   │   ├── companies.js                    
│   │   ├── founders.js                     
│   │   ├── founders.js                     
│   ├── middleware                                #Middleware functions for each module
│   │   ├── founders.js                     
│   │   ├── validation.js                   
│   ├── routes                                    #Routes for each module
│   │   ├── companies.js                    
│   │   ├── founders.js                     
│   └── schemas                                   #Validation schemas for Joi validation library
│   │   ├── companies.js
│   └── .env.sample                               #Sample of environment variables needed to run the backend
│   └── app.js                                    #Initializes libraries, routers, etc, for application
│   └── package.json
├── front-end
│   │   ├── src
│   │   │   ├── components                         #Directory holds all components and their respective CSS and JS files
│   │   │   │   ├── companyCreateForm
│   │   │   │   │   ├── companyCreateForm.css
│   │   │   │   │   ├── companyCreateForm.js
│   │   │   │   ├── companyDetail
│   │   │   │   │   ├── companyDetail.css
│   │   │   │   │   ├── companyDetail.js
│   │   │   │   ├── companyList
│   │   │   │   │   ├── companyList.css
│   │   │   │   │   ├── companyList.js
│   │   │   │   ├── errorPage
│   │   │   │   │   ├── errorPage.css
│   │   │   │   │   ├── errorPage.js
│   │   │   │   ├── notFound
│   │   │   │   │   ├── notFound.css
│   │   │   │   │   ├── notFound.js
│   │   │   ├── errorBoundary.js                    #Error boundary file as a fallback to errors
│   │   │   ├── states.js                           #Holds states used in dropdown
│   │   │   ├── pipes                               #Any pipes to transform data
│   │   │   │   ├── capitalizeLetter.js             #Pipe capitalizes every letter of every word and lowercase the rest of the word
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── constants.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── package.json
└── .gitignore
```

## Database Setup

```bash
full-stack-challenge
├── back-end
│   ├── bin
│   │   ├── www
│   ├── db                                        #Holds all database related files
│   │   ├── sql                                   #Holds SQL related files
│   │   │    ├── init.sql                         #Script to run in order to create database tables
│   │   │    ├── seed.sql                         #Script to run to seed database tables
```

With postgressql installed and database created, run this command to create the tables: 

```psql -U <user> <database> < /path/to/init.sql```

Once tables are created, seed the database with this command: 

```psql -U <user> <database> < /path/to/seed.sql``` 


## Running project locally

Change directory to `/back-end/` and run the command : `npm run start:dev`

## Running front end

Change directory to `/front-end/` and run the command : `npm run start`

### Note: For environment variables, review .env.sample and provide your values

## Live Site

This project has been deployed with DigitalOcean on : http://143.198.100.192
