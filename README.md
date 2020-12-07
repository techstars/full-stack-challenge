## Deployed Application

The application is deployed to AWS and can be accessed at the link below
http://ec2-18-222-213-70.us-east-2.compute.amazonaws.com/

## How to setup development and run application on your local machine

* Fork and clone repo onto your machine
* Navigate to root directory and install dependencies
```bash
  npm install
```
* To build application
   For development
```bash
  npm run react-dev
```
   For production
```bash
  npm run react-prod
```
* This application is designed to be connected to a postgres database, before running application add a .env file to the server folder with the following variables
  - PORT = the port you want to host the server on
  - DB_USER = postgres database username
  - DB_HOST = the database host(if running on local machine it will be localhost)
  - DB_DB = the name of the database you want to use
  - DB_PWD = the password used to login to the database
  - DB_PORT = the port the database is hosted on(postgres uses 5432 by default)
* Start and serve application
```bash
  npm start
```
* Navigate to localhost:{PORT number you configured in .env file}







